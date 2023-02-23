#!/usr/bin/env bash

set -e # terminate on first failure

command=${@:-""}

packages=$(
  find packages -maxdepth 1 -mindepth 1 -type d -print0 | xargs -0
)

for package in ${packages[@]}; do
  cd ${package}
  name=$(basename $(pwd))
  echo -e "\n📦 ${name}"
  echo "$ ${command}"
  eval ${command} || exitStatus=$?
  if [[ $exitStatus -ne 0 ]]; then
    echo -e "💥 ${package} failed! (exited with ${exitStatus})"
  fi
  cd - > /dev/null
done
