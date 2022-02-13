#!/bin/bash
export GULP_VERSION=${GULP_VERSION:-"2.3.0"}
export SASS_VERSION=${SASS_VERSION:-"latest"}
chmod +x ./.**/*.sh ./.**/**/*.sh
# npm install -g sass@${SASS_VERSION}
npm install --global gulp-cli@${GULP_VERSION}

npm i -s gulp-beautify gulp-seo
