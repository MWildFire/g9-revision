#!/usr/bin/env bash
# Closes the old address and the public code, AFTER the student has moved his progress to the domain:
#   1. CI stops publishing to GitHub Pages (repository variable PAGES_DISABLED=true);
#   2. GitHub Pages is switched off (https://mwildfire.github.io/g9-revision/ stops answering);
#   3. the repository becomes private (the domain keeps working: CI deploys to AWS from a private repository too).
# Run ONLY after the owner has written that the progress was moved:
#   MOVED_CONFIRMED_BY_OWNER=yes bash infra/github/make-private.sh
# Re-running is safe. To undo: gh repo edit --visibility public, gh variable delete PAGES_DISABLED, enable Pages (Actions).
set -euo pipefail
REPO=MWildFire/g9-revision
SITE_URL=https://lukalearningportal.academy/
OLD_URL=https://mwildfire.github.io/g9-revision/

[ "${MOVED_CONFIRMED_BY_OWNER:-}" = yes ] || { echo "STOP: run only after the owner confirmed that the progress was moved (MOVED_CONFIRMED_BY_OWNER=yes)"; exit 1; }
CODE=$(curl -s -o /dev/null -w '%{http_code}' "$SITE_URL" || true)
[ "$CODE" = 200 ] || { echo "STOP: $SITE_URL answers $CODE — the new address must work before the old one is closed"; exit 1; }
[ "$(gh variable list --repo "$REPO" --json name,value --jq '.[] | select(.name=="AWS_SITE_URL") | .value' || true)" = "$SITE_URL" ] || { echo "STOP: AWS_SITE_URL is not $SITE_URL — run infra/aws/domain.sh first"; exit 1; }
LAST=$(gh run list --repo "$REPO" --workflow deploy.yml --branch main --limit 1 --json conclusion --jq '.[0].conclusion')
[ "$LAST" = success ] || { echo "STOP: the last deploy is '$LAST', not success — fix CI first"; exit 1; }

gh variable set PAGES_DISABLED --repo "$REPO" --body true
echo "1/3 CI no longer publishes to GitHub Pages"
if gh api "repos/$REPO/pages" >/dev/null 2>&1; then gh api -X DELETE "repos/$REPO/pages" >/dev/null; fi
echo "2/3 GitHub Pages switched off"
if [ "$(gh repo view "$REPO" --json visibility --jq .visibility)" != PRIVATE ]; then
  gh repo edit "$REPO" --visibility private --accept-visibility-change-consequences
fi
[ "$(gh repo view "$REPO" --json visibility --jq .visibility)" = PRIVATE ] || { echo "STOP: the repository is still not private"; exit 1; }
echo "3/3 repository is private"

# The next push must still reach AWS from the private repository.
gh workflow run deploy.yml --repo "$REPO" --ref main
sleep 20
RUN=$(gh run list --repo "$REPO" --workflow deploy.yml --limit 1 --json databaseId --jq '.[0].databaseId')
gh run watch "$RUN" --repo "$REPO" --exit-status >/dev/null && echo "deploy from the private repository: OK" || { echo "STOP: deploy from the private repository failed — see: gh run view $RUN --repo $REPO --log-failed"; exit 1; }
echo "old address $OLD_URL now answers $(curl -s -o /dev/null -w '%{http_code}' "$OLD_URL" || true) (404 is expected; it can take a few minutes)"
echo "DONE"
