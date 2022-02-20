#!/bin/bash

# ---
#

if [ -d dist/ ]; then
  rm -fr dist/
fi;

mkdir -p dist/
# ---
#

if [ -d docs/ ]; then
  rm -fr docs/
fi;

mkdir -p docs/
