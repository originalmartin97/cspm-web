#!/usr/bin/env bash
set -euo pipefail

# Directories to keep on prod — edit this list
KEEP=(build)

if [[ "${#KEEP[@]}" -eq 0 ]]; then
  echo "KEEP must contain at least one directory." >&2
  exit 1
fi

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
ESCAPED_KEEP=()
for d in "${KEEP[@]}"; do
  escaped_d=$(printf '%s' "$d" | sed 's/[][(){}.^$*+?|\\]/\\&/g')
  ESCAPED_KEEP+=("$escaped_d")
done
PATTERN="^($(IFS='|'; echo "${ESCAPED_KEEP[*]}"))/"
git ls-files -z | grep -zvE "$PATTERN" | xargs -0 -r git rm -f

git add -A
if git diff --cached --quiet; then
  echo "prod already up to date with main."
else
  git commit -m "Sync prod from main @ $(git rev-parse --short origin/main)"
  git push origin prod
fi