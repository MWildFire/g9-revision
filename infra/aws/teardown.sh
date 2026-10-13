#!/usr/bin/env bash
# REMOVES the AWS copy of the site. Run ONLY on [redacted]'s explicit command. GitHub Pages is not affected.
set -euo pipefail
PROFILE="${AWS_PROFILE_NAME:-slovo-admin}"; REGION=eu-central-1
aws() { command aws --profile "$PROFILE" --region "$REGION" "$@"; }
S=infra/aws/state.json; [ -f "$S" ] || { echo "no $S"; exit 1; }
j() { node -e "console.log(require('./$S')['$1'])"; }
BUCKET=$(j bucket); DIST=$(j distribution); OAC=$(j oac); ROLE=github-g9-revision-deploy
# Nothing is removed without confirmation: pass --yes, or type DELETE at the prompt.
if [ "${1:-}" != "--yes" ]; then
printf 'Remove the AWS copy: bucket %s, distribution %s. Type DELETE to continue: ' "$BUCKET" "$DIST"
CONFIRM=""; read -r CONFIRM || true
[ "$CONFIRM" = "DELETE" ] || { echo "Not confirmed. Nothing was removed."; exit 1; }
fi
gh variable delete AWS_DEPLOY_ROLE_ARN --repo MWildFire/g9-revision || true   # CI stops deploying to AWS first
# A re-run after a partial removal must not fail: each step runs only while its resource still exists.
if aws cloudfront get-distribution --id "$DIST" >/dev/null 2>&1; then
ETAG=$(aws cloudfront get-distribution-config --id "$DIST" --query ETag --output text)
aws cloudfront get-distribution-config --id "$DIST" --query DistributionConfig > /tmp/g9-cfg.json
node -e "const f='/tmp/g9-cfg.json';const c=require(f);c.Enabled=false;require('fs').writeFileSync(f,JSON.stringify(c))"
aws cloudfront update-distribution --id "$DIST" --if-match "$ETAG" --distribution-config file:///tmp/g9-cfg.json >/dev/null
aws cloudfront wait distribution-deployed --id "$DIST"
aws cloudfront delete-distribution --id "$DIST" --if-match "$(aws cloudfront get-distribution --id "$DIST" --query ETag --output text)"
fi
# Also remove the deploy variables: otherwise the banner on GitHub Pages (MovedBanner) keeps pointing to the removed domain.
for v in AWS_DEPLOY_ROLE_ARN AWS_S3_BUCKET AWS_CLOUDFRONT_ID AWS_SITE_URL; do gh variable delete "$v" --repo MWildFire/g9-revision || true; done
if aws cloudfront get-origin-access-control --id "$OAC" >/dev/null 2>&1; then
aws cloudfront delete-origin-access-control --id "$OAC" --if-match "$(aws cloudfront get-origin-access-control --id "$OAC" --query ETag --output text)"
fi
if aws s3api head-bucket --bucket "$BUCKET" 2>/dev/null; then
aws s3api delete-bucket-policy --bucket "$BUCKET"
aws s3 rm "s3://$BUCKET" --recursive
aws s3api list-object-versions --bucket "$BUCKET" --output json > /tmp/g9-versions.json
node -e "
const v=require('/tmp/g9-versions.json');const all=[...(v.Versions||[]),...(v.DeleteMarkers||[])].map(x=>({Key:x.Key,VersionId:x.VersionId}));
const fs=require('fs');for(let i=0;i<all.length;i+=1000)fs.writeFileSync('/tmp/g9-del-'+(i/1000)+'.json',JSON.stringify({Objects:all.slice(i,i+1000),Quiet:true}));console.log(all.length+' versions')"
for f in /tmp/g9-del-*.json; do [ -f "$f" ] && aws s3api delete-objects --bucket "$BUCKET" --delete "file://$f" >/dev/null; done
aws s3api delete-bucket --bucket "$BUCKET"
fi
if aws iam get-role --role-name "$ROLE" >/dev/null 2>&1; then
aws iam delete-role-policy --role-name "$ROLE" --policy-name g9-revision-site-deploy
aws iam delete-role --role-name "$ROLE"
fi
echo "AWS copy removed."
