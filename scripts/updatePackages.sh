#!/usr/bin/env bash

set -e # terminate on first failure

ROOT_DIR="$(cd -P "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

ncu -f eslint -t minor -u; ncu -x eslint -u
${ROOT_DIR}/runPackages.sh "ncu -f eslint -t minor -u; ncu -x eslint -u"
pnpm install