#!/usr/bin/env bash

set -e # terminate on first failure

ROOT_DIR="$(cd -P "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

ncu -u
${ROOT_DIR}/runPackages.sh "ncu -u"
pnpm install