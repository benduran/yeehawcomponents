#!/bin/bash

if [ "$CI" != "" ]; then
  npm ci
else
  npm i
fi

npx husky
