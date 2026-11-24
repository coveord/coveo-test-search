#!/usr/bin/env bash
# Static check for .github/workflows/deploy-pages.yml (requirements 5.1, 5.2, 5.4, 5.7).
cd "$(dirname "$0")/.." || exit 1
f=.github/workflows/deploy-pages.yml
[ -f "$f" ] || { echo "FAIL: $f not found"; exit 1; }
status=0
fail() { echo "FAIL: $1"; [ -n "$2" ] && echo "$2"; status=1; }

# 1. Every `uses:` is pinned to a 40-char commit SHA.
out=$(grep -nE '^[[:space:]-]*uses:' "$f" | grep -vE '@[0-9a-f]{40}([[:space:]]|$)')
[ -n "$out" ] && fail 'uses: not pinned to a 40-char commit SHA' "$out"

# 2. No pull_request / pull_request_target triggers.
out=$(grep -nE 'pull_request(_target)?([^A-Za-z0-9_]|$)' "$f")
[ -n "$out" ] && fail 'pull_request / pull_request_target must not appear' "$out"

# 3-5. Structure checks via awk.
out=$(awk '
function indent(s) { match(s, /^ */); return RLENGTH }
/^[[:space:]]*(#.*)?$/ { next }
{
  ind = indent($0); line = $0
  sub(/^ +/, "", line)
  # leaving a run block
  if (inrun && ind <= runind) inrun = 0
  if (ind == 0) { top = line; sub(/:.*/, "", top); job = ""; inperm = (top == "permissions") }
  if (top == "jobs" && ind == 2) { job = line; sub(/:.*/, "", job) }
  # top-level permissions: only contents: read
  if (ind > 0 && top == "permissions" && line != "contents: read")
    printf("%d: top-level permissions may only be \"contents: read\": %s\n", NR, line)
  if (ind == 0 && top == "permissions" && line != "permissions:")
    printf("%d: top-level permissions must be a mapping with only contents: read\n", NR)
  # pages/id-token write only in deploy job
  if (line ~ /^(pages|id-token):[[:space:]]*write/) {
    if (top != "jobs" || job != "deploy")
      printf("%d: \"%s\" outside deploy job (job=%s)\n", NR, line, (job == "" ? "<top-level>" : job))
    else seen[line ~ /^pages/ ? "pages" : "idtoken"] = 1
  }
  # inputs.* inside run bodies
  if (inrun && line ~ /\$\{\{[^}]*inputs\./) printf("%d: inputs.* inside run body: %s\n", NR, line)
  if (line ~ /^(- )?run:/) {
    runind = ind; inrun = 1
    if (line ~ /\$\{\{[^}]*inputs\./) printf("%d: inputs.* inside run body: %s\n", NR, line)
  }
}
END {
  if (!seen["pages"]) print "deploy job lacks pages: write"
  if (!seen["idtoken"]) print "deploy job lacks id-token: write"
}' "$f")
[ -n "$out" ] && fail 'structure checks' "$out"

[ "$status" -eq 0 ] && echo "OK: $f passes static checks"
exit "$status"
