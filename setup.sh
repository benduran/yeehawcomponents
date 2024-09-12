#!/bin/bash

if [ "$CI" != "" ]; then
  npm ci
else
  npm i
fi

cp ./commit-msg ./.git/hooks
