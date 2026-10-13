#!/usr/bin/env bash
# Puts the AWS copy of the site on its own domain: https://lukalearningportal.academy/
#   - the Route 53 hosted zone already exists (created 13.10 in the console; Spaceship points its NS to it);
#   - an ACM certificate in us-east-1 for the domain and www (DNS validation in that zone);
#   - the CloudFront distribution answers on both names; www gets a 301 to the bare domain
#     (CloudFront Function), because saved progress lives per address and must stay in one place;
#   - A/AAAA alias records for both names;
#   - the GitHub variable AWS_SITE_URL, so the banner on the old address and the transfer page lead here.
# Idempotent: safe to re-run after an interruption; existing pieces are reused, nothing is deleted.
# Run from the repository root with the owner's login:  aws login --profile slovo-admin --region eu-central-1
#   EXPECTED_ACCOUNT=<12 digits> bash infra/aws/domain.sh
set -euo pipefail
export LC_ALL=C   # the same sort order for every list of name servers
PROFILE="${AWS_PROFILE_NAME:-slovo-admin}"
REGION=eu-central-1
REPO=MWildFire/g9-revision
NAME=g9-revision
APEX=lukalearningportal.academy
WWW="www.$APEX"
SITE_URL="https://$APEX/"
FUNCTION=[redacted]ww-to-apex
CLOUDFRONT_ZONE=Z2FDTNDATAQYW2   # fixed hosted zone id of every CloudFront alias target
TMP="$(mktemp -d)"
aws() { command aws --profile "$PROFILE" --region "$REGION" "$@"; }
acm() { command aws --profile "$PROFILE" --region us-east-1 acm "$@"; }
say() { printf '\n== %s\n' "$*"; }

[ -n "${EXPECTED_ACCOUNT:-}" ] || { echo "STOP: EXPECTED_ACCOUNT=<12 digits> is required"; exit 1; }
ACCOUNT=$(aws sts get-caller-identity --query Account --output text)
[ "$ACCOUNT" = "$EXPECTED_ACCOUNT" ] || { echo "STOP: logged into account $ACCOUNT, expected $EXPECTED_ACCOUNT"; exit 1; }

say "1. hosted zone"
ZONES=$(aws route53 list-hosted-zones-by-name --dns-name "$APEX." --query "HostedZones[?Name=='$APEX.' && Config.PrivateZone==\`false\`].Id" --output text)
[ -n "$ZONES" ] && [ "$ZONES" != "None" ] || { echo "STOP: no public hosted zone $APEX — it must exist already (do not create a new one: its name servers would differ from the ones set at Spaceship)"; exit 1; }
[ "$(echo "$ZONES" | wc -w | tr -d ' ')" = 1 ] || { echo "STOP: several hosted zones named $APEX: $ZONES — ask the owner which one is used"; exit 1; }
ZONE_ID=${ZONES##*/}
ZONE_NS=$(aws route53 get-hosted-zone --id "$ZONE_ID" --query 'DelegationSet.NameServers' --output text | tr '\t' '\n' | sort | tr '\n' ' ')
echo "zone $ZONE_ID · name servers: $ZONE_NS"

public_ns() {  # name servers the internet sees for the domain
  if command -v dig >/dev/null; then dig +short NS "$APEX" @1.1.1.1 | sed 's/\.$//' | sort | tr '\n' ' '
  else curl -s "https://dns.google/resolve?name=$APEX&type=NS" | node -e "let s='';process.stdin.on('data',d=>s+=d).on('end',()=>{const a=(JSON.parse(s).Answer||[]).map(x=>x.data.replace(/\.$/,'')).sort();console.log(a.join(' ')+' ')})"; fi
}
for i in $(seq 1 60); do
  SEEN=$(public_ns || true)
  [ "$SEEN" = "$ZONE_NS" ] && { echo "delegation OK"; break; }
  [ "$i" = 60 ] && { echo "STOP: after 60 min the internet still sees [$SEEN] instead of the Route 53 name servers. Check the domain at Spaceship (Nameservers & DNS → Custom nameservers) and re-run."; exit 1; }
  echo "waiting for delegation (seen: ${SEEN:-nothing}) … $i/60"; sleep 60
done

say "2. certificate (us-east-1, DNS validation)"
CERT_ARN=$(acm list-certificates --certificate-statuses ISSUED PENDING_VALIDATION --query "CertificateSummaryList[?DomainName=='$APEX'].CertificateArn | [0]" --output text)
if [ "$CERT_ARN" = "None" ] || [ -z "$CERT_ARN" ]; then
  CERT_ARN=$(acm request-certificate --domain-name "$APEX" --subject-alternative-names "$WWW" --validation-method DNS \
    --idempotency-token lukaportal2026 --tags Key=Project,Value=g9-revision --query CertificateArn --output text)
  echo "certificate requested"
fi
echo "certificate $CERT_ARN"
for i in $(seq 1 30); do   # validation records appear a few seconds after the request
  acm describe-certificate --certificate-arn "$CERT_ARN" --output json > "$TMP/cert.json"
  READY=$(node -e "const c=require('$TMP/cert.json').Certificate;const o=c.DomainValidationOptions||[];console.log(o.length>=2&&o.every(x=>x.ResourceRecord)?'yes':'no')")
  [ "$READY" = yes ] && break; sleep 5
done
[ "$READY" = yes ] || { echo "STOP: the certificate has no validation records yet — re-run in a few minutes"; exit 1; }
node -e "
const c=require('$TMP/cert.json').Certificate;const seen=new Set();const changes=[];
for(const o of c.DomainValidationOptions){const r=o.ResourceRecord;if(seen.has(r.Name))continue;seen.add(r.Name);
changes.push({Action:'UPSERT',ResourceRecordSet:{Name:r.Name,Type:r.Type,TTL:300,ResourceRecords:[{Value:r.Value}]}});}
require('fs').writeFileSync('$TMP/validation.json',JSON.stringify({Comment:'ACM validation',Changes:changes}));"
aws route53 change-resource-record-sets --hosted-zone-id "$ZONE_ID" --change-batch "file://$TMP/validation.json" >/dev/null
echo "validation records written"
for i in $(seq 1 90); do
  STATUS=$(acm describe-certificate --certificate-arn "$CERT_ARN" --query Certificate.Status --output text)
  [ "$STATUS" = ISSUED ] && { echo "certificate ISSUED"; break; }
  [ "$STATUS" = PENDING_VALIDATION ] || { echo "STOP: certificate status $STATUS"; exit 1; }
  [ "$i" = 90 ] && { echo "STOP: certificate still pending after 90 min — re-run later (nothing is lost)"; exit 1; }
  echo "waiting for the certificate … $i/90"; sleep 60
done

say "3. www → bare domain (CloudFront Function)"
cat > "$TMP/function.js" <<JS
// ${WWW} answers with a permanent redirect to ${APEX}: progress is saved per address, keep one address.
function handler(event) {
  var request = event.request;
  var host = request.headers.host ? request.headers.host.value : '';
  if (host !== '${WWW}') return request;
  var parts = [];
  for (var key in request.querystring) {
    var item = request.querystring[key];
    var values = item.multiValue ? item.multiValue : [item];
    for (var i = 0; i < values.length; i++) parts.push(values[i].value === '' ? key : key + '=' + values[i].value);
  }
  return {
    statusCode: 301,
    statusDescription: 'Moved Permanently',
    headers: {
      location: { value: 'https://${APEX}' + request.uri + (parts.length ? '?' + parts.join('&') : '') },
      'cache-control': { value: 'max-age=3600' }
    }
  };
}
JS
if aws cloudfront describe-function --name "$FUNCTION" --stage DEVELOPMENT >/dev/null 2>&1; then
  ETAG=$(aws cloudfront describe-function --name "$FUNCTION" --stage DEVELOPMENT --query ETag --output text)
  ETAG=$(aws cloudfront update-function --name "$FUNCTION" --if-match "$ETAG" --function-config "Comment=www to $APEX,Runtime=cloudfront-js-2.0" --function-code "fileb://$TMP/function.js" --query ETag --output text)
else
  ETAG=$(aws cloudfront create-function --name "$FUNCTION" --function-config "Comment=www to $APEX,Runtime=cloudfront-js-2.0" --function-code "fileb://$TMP/function.js" --query ETag --output text)
  echo "function created"
fi
aws cloudfront publish-function --name "$FUNCTION" --if-match "$ETAG" >/dev/null
FUNCTION_ARN=$(aws cloudfront describe-function --name "$FUNCTION" --stage LIVE --query FunctionSummary.FunctionMetadata.FunctionARN --output text)
echo "function $FUNCTION_ARN (published)"

say "4. distribution answers on $APEX and $WWW"
DIST_ID=$(aws cloudfront list-distributions --query "DistributionList.Items[?Comment=='$NAME static site'].Id | [0]" --output text)
[ "$DIST_ID" != "None" ] && [ -n "$DIST_ID" ] || { echo "STOP: distribution '$NAME static site' not found — run infra/aws/setup.sh first"; exit 1; }
CF_DOMAIN=$(aws cloudfront get-distribution --id "$DIST_ID" --query Distribution.DomainName --output text)
ETAG=$(aws cloudfront get-distribution-config --id "$DIST_ID" --query ETag --output text)
aws cloudfront get-distribution-config --id "$DIST_ID" --query DistributionConfig --output json > "$TMP/dist.json"
CHANGED=$(node -e "
const fs=require('fs');const f='$TMP/dist.json';const c=JSON.parse(fs.readFileSync(f,'utf8'));
const fns=c.DefaultCacheBehavior.FunctionAssociations?.Items||[];
const other=fns.filter(x=>x.FunctionARN!=='$FUNCTION_ARN');
if(other.length){console.error('STOP: the distribution already has other functions: '+other.map(x=>x.FunctionARN).join(', '));process.exit(3);}
const done=(c.Aliases?.Items||[]).length===2&&['$APEX','$WWW'].every(a=>c.Aliases.Items.includes(a))
 &&c.ViewerCertificate?.ACMCertificateArn==='$CERT_ARN'&&c.ViewerCertificate?.SSLSupportMethod==='sni-only'
 &&fns.some(x=>x.FunctionARN==='$FUNCTION_ARN'&&x.EventType==='viewer-request');
if(done){console.log('no');process.exit(0);}
c.Aliases={Quantity:2,Items:['$APEX','$WWW']};
c.ViewerCertificate={ACMCertificateArn:'$CERT_ARN',SSLSupportMethod:'sni-only',MinimumProtocolVersion:'TLSv1.2_2021',CloudFrontDefaultCertificate:false};
c.DefaultCacheBehavior.FunctionAssociations={Quantity:1,Items:[{FunctionARN:'$FUNCTION_ARN',EventType:'viewer-request'}]};
fs.writeFileSync(f,JSON.stringify(c));console.log('yes');")
if [ "$CHANGED" = yes ]; then
  aws cloudfront update-distribution --id "$DIST_ID" --if-match "$ETAG" --distribution-config "file://$TMP/dist.json" >/dev/null
  echo "distribution updated, waiting until it is deployed (5–15 min)…"
  aws cloudfront wait distribution-deployed --id "$DIST_ID"
fi
echo "distribution $DIST_ID ($CF_DOMAIN) ready"

say "5. DNS records"
node -e "
const changes=[];for(const name of ['$APEX','$WWW'])for(const type of ['A','AAAA'])
changes.push({Action:'UPSERT',ResourceRecordSet:{Name:name,Type:type,AliasTarget:{HostedZoneId:'$CLOUDFRONT_ZONE',DNSName:'$CF_DOMAIN',EvaluateTargetHealth:false}}});
require('fs').writeFileSync('$TMP/records.json',JSON.stringify({Comment:'site on CloudFront',Changes:changes}));"
CHANGE=$(aws route53 change-resource-record-sets --hosted-zone-id "$ZONE_ID" --change-batch "file://$TMP/records.json" --query ChangeInfo.Id --output text)
aws route53 wait resource-record-sets-changed --id "${CHANGE##*/}"
echo "A/AAAA for $APEX and $WWW → $CF_DOMAIN"

say "6. checks"
ok=0
for i in $(seq 1 30); do
  CODE=$(curl -s -o "$TMP/index.html" -w '%{http_code}' "$SITE_URL" || true)
  WWW_CODE=$(curl -s -o /dev/null -w '%{http_code} %{redirect_url}' "https://$WWW/" || true)
  if [ "$CODE" = 200 ] && grep -q 'id="root"' "$TMP/index.html" && [ "$WWW_CODE" = "301 $SITE_URL" ]; then ok=1; break; fi
  echo "not answering yet ($SITE_URL → $CODE; www → $WWW_CODE) … $i/30"; sleep 30
done
[ "$ok" = 1 ] || { echo "STOP: the domain does not answer correctly yet (DNS caches can take up to an hour). Re-run this script later; it only checks again."; exit 1; }
echo "$SITE_URL → 200 · https://$WWW/ → 301 $SITE_URL"

say "7. CI: the banner on the old address and the transfer page now lead to $SITE_URL"
gh variable set AWS_SITE_URL --repo "$REPO" --body "$SITE_URL"
gh workflow run deploy.yml --repo "$REPO" --ref main
echo "deploy started: gh run list --repo $REPO --workflow deploy.yml --limit 1"

[ -f infra/aws/state.json ] || echo '{}' > infra/aws/state.json
node -e "
const fs=require('fs');const f='infra/aws/state.json';const s=JSON.parse(fs.readFileSync(f,'utf8'));
Object.assign(s,{siteUrl:'$SITE_URL',domain:'$APEX',aliases:['$APEX','$WWW'],hostedZone:'$ZONE_ID',certificateArn:'$CERT_ARN',wwwFunction:'$FUNCTION_ARN'});
fs.writeFileSync(f,JSON.stringify(s,null,1)+'\n');"
echo "state saved to infra/aws/state.json (git-ignored)"
echo "DONE: $SITE_URL"
