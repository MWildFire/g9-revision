#!/usr/bin/env bash
# Usage (from your worktree): bash scripts/content/integrate.sh "content(P-p-radiation): ..."
# Commits everything in this worktree (content-work/ is git-ignored), then under a Mac-wide lock
# rebases on origin/main, runs tests and build, and pushes to main. One lane integrates at a time.
# Exit codes: 2 = rebase conflict (nothing pushed), 3 = tests failed, 4 = build failed, 5 = no lock.
set -euo pipefail
MSG="${1:?usage: integrate.sh \"commit message\"}"
LOCK="$HOME/Projects/.g9-revision-main.lock"
cd "$(git rev-parse --show-toplevel)"
git add -A
git diff --cached --quiet || git commit -q -m "$MSG"
age() { echo $(( $(date +%s) - $(stat -f %m "$1" 2>/dev/null || stat -c %Y "$1") )); }
got=0
for _ in $(seq 1 90); do
  if mkdir "$LOCK" 2>/dev/null; then got=1; break; fi
  if [ -d "$LOCK" ] && [ "$(age "$LOCK")" -gt 1800 ]; then rmdir "$LOCK" 2>/dev/null || true; fi
  sleep 20
done
[ "$got" = 1 ] || { echo "no integration lock"; exit 5; }
trap 'rmdir "$LOCK" 2>/dev/null || true' EXIT
git fetch -q origin
if ! git rebase -q origin/main; then
  echo "REBASE CONFLICT: $(git diff --name-only --diff-filter=U | tr '\n' ' ')"
  git rebase --abort
  exit 2
fi
npm test > /tmp/g9-integrate-test.log 2>&1 || { tail -40 /tmp/g9-integrate-test.log; echo "TESTS FAILED after rebase — nothing pushed"; exit 3; }
npm run build > /tmp/g9-integrate-build.log 2>&1 || { tail -40 /tmp/g9-integrate-build.log; echo "BUILD FAILED after rebase — nothing pushed"; exit 4; }
git push -q origin HEAD:main
echo "pushed $(git rev-parse --short HEAD) to main"
