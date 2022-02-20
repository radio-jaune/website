#!/bin/bash

if [ -d public/ ]; then
  rm -fr public/
fi;

if [ -d docs/ ]; then
  rm -fr docs/
fi;

if [ -d dist/ ]; then
  rm -fr dist/
fi;
