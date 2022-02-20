#!/bin/bash


if [ -d docs/ ]; then
  rm -fr docs/
fi;

if [ -d dist/ ]; then
  rm -fr dist/
fi;
