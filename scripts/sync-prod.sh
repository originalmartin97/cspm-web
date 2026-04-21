#!/usr/bin/env bash
set -euo pipefail

# Directories to keep on prod — edit this list
KEEP=(build)

git fetch origin

# Switch to the existing prod branch (create local tracking if needed)
git checkout prod 2>/dev/null || git checkout -b prod origin/prod
git pull --ff-only origin prod

# Replace each kept directory with whatever main has now
for d in "${KEEP[@]}"; do
  git rm -rf -- "$d" 2>/dev/null || true
  git checkout origin/main -- "$d"
done

# Defensive sweep: drop anything that somehow ended up outside KEEP
PATTERN="^($(IFS='|'; echo "${KEEP[*]}"))/"
git ls-files -z | grep -zvE "$PATTERN" | xargs -0 -r git rm -f

git add -A
if git diff --cached --quiet; then
  echo "prod already up to date with main."
else
  git commit -m "Sync prod from main @ $(git rev-parse --short origin/main)"
  git push origin prod
fi