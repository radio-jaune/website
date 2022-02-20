#!/bin/bash

# ---

if [ -d content/ ]; then
  rm -fr content/
fi;

if [ -d data/ ]; then
  rm -fr data/
fi;

if [ -d static/ ]; then
  rm -fr static/
fi;

if [ -d assets/ ]; then
  rm -fr assets/
fi;

if [ -d layouts/ ]; then
  rm -fr layouts/
fi;

if [ -d resources/ ]; then
  rm -fr resources/
fi;

if [ -d themes/ ]; then
  rm -fr themes/
fi;

if [ -f config.toml ]; then
  rm config.toml
fi;
