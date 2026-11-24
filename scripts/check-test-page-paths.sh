#!/usr/bin/env bash
# Static check: test pages must use relative paths so they work under a GitHub Pages project subpath.
cd "$(dirname "$0")/.." || exit 1

status=0

check() {
  local label="$1" out="$2"
  if [ -n "$out" ]; then
    echo "FAIL: $label"
    echo "$out"
    status=1
  fi
}

check 'root-absolute src/href' "$(grep -nE '(src|href)="/[^/]' testPages/*.html)"
check '../public/ reference' "$(grep -nF '../public/' testPages/*.html)"
check 'root-absolute Coveo.initSearchbox target' "$(grep -nE "initSearchbox\([^,)]+,[[:space:]]*['\"]/[^/]" testPages/*.html)"

[ "$status" -eq 0 ] && echo "OK: no root-absolute or ../public/ paths in testPages/"
exit "$status"
