#!/usr/bin/env bash
# Usage (from your worktree): bash scripts/content/integrate.sh "content(P-p-radiation): ..."
# Commits the changes under src/ docs/ scripts/ tests/ public/ (content-work/ is git-ignored), then under a
# Mac-wide lock rebases on origin/main, checks privacy, runs tests and build, and pushes to main.
# One lane integrates at a time. Changes elsewhere (infra/, .github/, package.json…) are never swept in:
# commit them by hand first, only when the plan says so.
# Exit codes: 2 = rebase conflict (nothing pushed), 3 = tests failed, 4 = build failed, 5 = no lock,
#             6 = uncommitted changes outside the allowed folders, 7 = a name/the school/a private path in the text.
set -euo pipefail
MSG="${1:?usage: integrate.sh \"commit message\"}"
LOCK="$HOME/Projects/.g9-revision-main.lock"
cd "$(git rev-parse --show-toplevel)"
# Use only the checker already published on main, never a replacement from this branch.
PRIVACY_CHECK=$(mktemp "${TMPDIR:-/tmp}/g9-published-privacy.XXXXXX.mjs")
got=0
cleanup() {
  rm -f "$PRIVACY_CHECK"
  if [ "$got" = 1 ]; then rmdir "$LOCK" 2>/dev/null || true; fi
}
trap cleanup EXIT
published_checker() {
  git show origin/main:scripts/content/privacy-check.mjs > "$PRIVACY_CHECK" || {
    echo "PRIVACY: published checker unavailable — nothing pushed"
    exit 7
  }
}
published_checker
git add -A -- src docs scripts tests public
OUTSIDE=$(git status --porcelain --untracked-files=all | grep -v -E '^.. "?(src|docs|scripts|tests|public)/' || true)
if [ -n "$OUTSIDE" ]; then
  echo "STOP: changes outside src/ docs/ scripts/ tests/ public/ — revert them, move them to content-work/, or commit them by hand if the plan allows:"
  echo "$OUTSIDE"; exit 6
fi
if ! git diff --cached --quiet; then
  G9_COMMIT_MSG="$MSG" node "$PRIVACY_CHECK" --staged || { echo "PRIVACY: fix the lines above (nothing was committed), then run integrate.sh again"; exit 7; }
  git commit -q -m "$MSG"
fi
age() { echo $(( $(date +%s) - $(stat -f %m "$1" 2>/dev/null || stat -c %Y "$1") )); }
for _ in $(seq 1 90); do
  if mkdir "$LOCK" 2>/dev/null; then got=1; break; fi
  if [ -d "$LOCK" ] && [ "$(age "$LOCK")" -gt 1800 ]; then rmdir "$LOCK" 2>/dev/null || true; fi
  sleep 20
done
[ "$got" = 1 ] || { echo "no integration lock"; exit 5; }
git fetch -q origin
published_checker
if ! git rebase -q origin/main; then
  echo "REBASE CONFLICT: $(git diff --name-only --diff-filter=U | tr '\n' ' ')"
  git rebase --abort
  exit 2
fi
# every local commit (added lines and messages): a fix in a later commit would not hide an earlier one
node "$PRIVACY_CHECK" origin/main || {
  cat <<'PRIVACY_ADVICE'
PRIVACY: nothing pushed. These commits are not public yet: fix the text, then 'git add -A -- src docs scripts tests public && git commit --amend --no-edit' (one commit) or 'git reset --soft "$(git merge-base HEAD origin/main)" && git commit -m <clean message>' (several), and run integrate.sh again
PRIVACY_ADVICE
  exit 7
}
npm test > /tmp/g9-integrate-test.log 2>&1 || { tail -40 /tmp/g9-integrate-test.log; echo "TESTS FAILED after rebase — nothing pushed"; exit 3; }
npm run build > /tmp/g9-integrate-build.log 2>&1 || { tail -40 /tmp/g9-integrate-build.log; echo "BUILD FAILED after rebase — nothing pushed"; exit 4; }
if [ "$(git rev-parse HEAD)" = "$(git rev-parse origin/main)" ]; then
  echo "nothing to push: HEAD already matches origin/main"
  exit 0
fi
git push -q origin HEAD:main
echo "pushed $(git rev-parse --short HEAD) to main"
