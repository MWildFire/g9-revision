#!/usr/bin/env bash
# One-time AWS setup for the g9-revision static site:
#   private S3 bucket (versioned) + CloudFront with Origin Access Control + GitHub OIDC deploy role,
#   then the first upload. Idempotent: safe to re-run; existing resources are reused.
# Run from the repository root after the owner's login:  aws login --profile slovo-admin --region eu-central-1
#   EXPECTED_ACCOUNT=<12 digits> bash infra/aws/setup.sh
# Writes infra/aws/state.json (git-ignored) with the resource ids.
set -euo pipefail
PROFILE=slovo-admin
REGION=eu-central-1
REPO=MWildFire/g9-revision
NAME=g9-revision
TMP="$(mktemp -d)"
aws() { command aws --profile "$PROFILE" --region "$REGION" "$@"; }

[ -n "${EXPECTED_ACCOUNT:-}" ] || { echo "STOP: EXPECTED_ACCOUNT=<12 digits> is required (the account you expect to be logged into)"; exit 1; }
ACCOUNT=$(aws sts get-caller-identity --query Account --output text)
[ "$ACCOUNT" = "$EXPECTED_ACCOUNT" ] || { echo "STOP: logged into account $ACCOUNT, expected $EXPECTED_ACCOUNT"; exit 1; }
BUCKET="$NAME-site-$ACCOUNT"
echo "account $ACCOUNT · bucket $BUCKET"

# Refuse to publish an uncommitted tree before any resource is created.
DIRTY=$(git status --porcelain) && [ -z "$DIRTY" ] || { echo "STOP: закоммить или убрать изменения перед выкладкой"; exit 1; }

# 1. Private, versioned, encrypted bucket; old versions expire after 30 days.
if aws s3api head-bucket --bucket "$BUCKET" 2>/dev/null; then echo "bucket exists"; else
  aws s3api create-bucket --bucket "$BUCKET" --create-bucket-configuration "LocationConstraint=$REGION" --object-ownership BucketOwnerEnforced >/dev/null
  echo "bucket created"
fi
aws s3api put-public-access-block --bucket "$BUCKET" --public-access-block-configuration BlockPublicAcls=true,IgnorePublicAcls=true,BlockPublicPolicy=true,RestrictPublicBuckets=true
aws s3api put-bucket-versioning --bucket "$BUCKET" --versioning-configuration Status=Enabled
aws s3api put-bucket-encryption --bucket "$BUCKET" --server-side-encryption-configuration '{"Rules":[{"ApplyServerSideEncryptionByDefault":{"SSEAlgorithm":"AES256"}}]}'
aws s3api put-bucket-lifecycle-configuration --bucket "$BUCKET" --lifecycle-configuration '{"Rules":[{"ID":"expire-old-versions","Status":"Enabled","Filter":{},"NoncurrentVersionExpiration":{"NoncurrentDays":30}}]}'
aws s3api put-bucket-tagging --bucket "$BUCKET" --tagging 'TagSet=[{Key=Project,Value=g9-revision},{Key=Owner,Value=site-owner}]'

# 2. Origin Access Control: CloudFront signs its requests; the bucket stays private.
OAC_ID=$(aws cloudfront list-origin-access-controls --query "OriginAccessControlList.Items[?Name=='$NAME-oac'].Id | [0]" --output text)
if [ "$OAC_ID" = "None" ] || [ -z "$OAC_ID" ]; then
  cat > "$TMP/oac.json" <<JSON
{"Name":"$NAME-oac","Description":"$NAME S3 origin","SigningProtocol":"sigv4","SigningBehavior":"always","OriginAccessControlOriginType":"s3"}
JSON
  OAC_ID=$(aws cloudfront create-origin-access-control --origin-access-control-config "file://$TMP/oac.json" --query OriginAccessControl.Id --output text)
  echo "OAC created"
fi

# 3. Distribution (HTTPS on the default *.cloudfront.net certificate; HashRouter needs no rewrites).
DIST_ID=$(aws cloudfront list-distributions --query "DistributionList.Items[?Comment=='$NAME static site'].Id | [0]" --output text)
if [ "$DIST_ID" = "None" ] || [ -z "$DIST_ID" ]; then
  cat > "$TMP/dist.json" <<JSON
{"CallerReference":"$NAME-$(date +%s)","Comment":"$NAME static site","Enabled":true,"DefaultRootObject":"index.html",
 "PriceClass":"PriceClass_200","HttpVersion":"http2and3","IsIPV6Enabled":true,
 "Origins":{"Quantity":1,"Items":[{"Id":"s3-site","DomainName":"$BUCKET.s3.$REGION.amazonaws.com","OriginAccessControlId":"$OAC_ID","S3OriginConfig":{"OriginAccessIdentity":""}}]},
 "DefaultCacheBehavior":{"TargetOriginId":"s3-site","ViewerProtocolPolicy":"redirect-to-https","Compress":true,
  "AllowedMethods":{"Quantity":2,"Items":["GET","HEAD"],"CachedMethods":{"Quantity":2,"Items":["GET","HEAD"]}},
  "CachePolicyId":"658327ea-f89d-4fab-a63d-7e88639e58f6"}}
JSON
  DIST_ID=$(aws cloudfront create-distribution --distribution-config "file://$TMP/dist.json" --query Distribution.Id --output text)
  echo "distribution created"
fi
DOMAIN=$(aws cloudfront get-distribution --id "$DIST_ID" --query Distribution.DomainName --output text)
DIST_ARN="arn:aws:cloudfront::$ACCOUNT:distribution/$DIST_ID"

# 4. Only this distribution may read the bucket; requests over plain HTTP are refused.
cat > "$TMP/bucket-policy.json" <<JSON
{"Version":"2012-10-17","Statement":[{"Sid":"CloudFrontRead","Effect":"Allow","Principal":{"Service":"cloudfront.amazonaws.com"},
 "Action":"s3:GetObject","Resource":"arn:aws:s3:::$BUCKET/*","Condition":{"StringEquals":{"AWS:SourceArn":"$DIST_ARN"}}},
 {"Sid":"DenyInsecureTransport","Effect":"Deny","Principal":"*","Action":"s3:*","Resource":["arn:aws:s3:::$BUCKET","arn:aws:s3:::$BUCKET/*"],"Condition":{"Bool":{"aws:SecureTransport":"false"}}}]}
JSON
aws s3api put-bucket-policy --bucket "$BUCKET" --policy "file://$TMP/bucket-policy.json"

# 5. GitHub Actions role: only pushes to main of MWildFire/g9-revision; only this bucket and this distribution.
PROVIDER_ARN="arn:aws:iam::$ACCOUNT:oidc-provider/token.actions.githubusercontent.com"
aws iam get-open-id-connect-provider --open-id-connect-provider-arn "$PROVIDER_ARN" >/dev/null || { echo "STOP: GitHub OIDC provider missing"; exit 1; }
ROLE="github-$NAME-deploy"
cat > "$TMP/trust.json" <<JSON
{"Version":"2012-10-17","Statement":[{"Effect":"Allow","Principal":{"Federated":"$PROVIDER_ARN"},"Action":"sts:AssumeRoleWithWebIdentity",
 "Condition":{"StringEquals":{"token.actions.githubusercontent.com:aud":"sts.amazonaws.com","token.actions.githubusercontent.com:sub":"repo:$REPO:ref:refs/heads/main"}}}]}
JSON
if aws iam get-role --role-name "$ROLE" >/dev/null 2>&1; then
  aws iam update-assume-role-policy --role-name "$ROLE" --policy-document "file://$TMP/trust.json"
else
  aws iam create-role --role-name "$ROLE" --assume-role-policy-document "file://$TMP/trust.json" --description "GitHub Actions deploy of $REPO to S3/CloudFront" --tags Key=Project,Value=g9-revision >/dev/null
  echo "role created"
fi
cat > "$TMP/deploy-policy.json" <<JSON
{"Version":"2012-10-17","Statement":[
 {"Effect":"Allow","Action":"s3:ListBucket","Resource":"arn:aws:s3:::$BUCKET"},
 {"Effect":"Allow","Action":["s3:GetObject","s3:PutObject","s3:DeleteObject"],"Resource":"arn:aws:s3:::$BUCKET/*"},
 {"Effect":"Allow","Action":"cloudfront:CreateInvalidation","Resource":"$DIST_ARN"}]}
JSON
aws iam put-role-policy --role-name "$ROLE" --policy-name "$NAME-site-deploy" --policy-document "file://$TMP/deploy-policy.json"
ROLE_ARN=$(aws iam get-role --role-name "$ROLE" --query Role.Arn --output text)

# 6. First upload with the current main (CI takes over afterwards).
VITE_PRIMARY_URL="https://$DOMAIN/" npx vite build --base=/ --outDir dist-aws >/dev/null
aws s3 sync dist-aws/assets "s3://$BUCKET/assets" --cache-control "public,max-age=31536000,immutable" >/dev/null
aws s3 sync dist-aws "s3://$BUCKET" --delete --exclude "assets/*" --cache-control "no-cache" >/dev/null
aws cloudfront create-invalidation --distribution-id "$DIST_ID" --paths "/index.html" "/" >/dev/null

printf '{"account":"%s","region":"%s","bucket":"%s","oac":"%s","distribution":"%s","domain":"%s","url":"https://%s/","roleArn":"%s"}\n' \
  "$ACCOUNT" "$REGION" "$BUCKET" "$OAC_ID" "$DIST_ID" "$DOMAIN" "$DOMAIN" "$ROLE_ARN" > infra/aws/state.json
cat infra/aws/state.json
echo "Site: https://$DOMAIN/  (a new distribution needs 5–15 minutes before it answers everywhere)"
