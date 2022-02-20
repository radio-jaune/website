#!/bin/bash


export GULP_CLI_VERSION=${GULP_CLI_VERSION:-"2.3.0"}
export SASS_VERSION=${SASS_VERSION:-"latest"}
chmod +x ./.**/*.sh ./.**/**/*.sh
chmod +x ./.npm.scripts/**/*.sh ./.npm.scripts/**/**/*.sh ./.npm.scripts/*.sh
echo "# ------ ------ ------ ------ ------ ------ ------ #"
echo "# ------ ------ ------ ------ ------ ------ ------ #"
echo "# ------ ------ ------ ------ ------ ------ ------ #"
echo "# ------ -- [$0]"
echo "# ------ --  (All npm) global AND local project installations"
echo "# ------ ------ ------ ------ ------ ------ ------ #"
echo "# ------ ------ ------ ------ ------ ------ ------ #"
echo "# ------ ------ ------ ------ ------ ------ ------ #"
ls -alh ./.npm.scripts/dev/env.sh
source ./.npm.scripts/dev/env.sh
echo "# ------ ------ ------ ------ ------ ------ ------ #"
echo "# ------ -  PATH=[${PATH}]"
echo "# ------ -  HUGO_HOST=[${HUGO_HOST}]"
echo "# ------ -  HUGO_PORT=[${HUGO_PORT}]"
echo "# ------ -  HUGO_BASE_URL=[${HUGO_BASE_URL}]"
echo "# ------ -  HUGO_BASE_URL=[${HUGO_BASE_URL}]"
echo "# ------ ------ ------ ------ ------ ------ ------ #"
echo "# ------ ------ ------ ------ ------ ------ ------ #"
# global installations
chmod +x ./.npm.scripts/dev/prepare-g.sh
ls -alh ./.npm.scripts/dev/prepare-g.sh
./.npm.scripts/dev/prepare-g.sh

# project-local installations
chmod +x ./.npm.scripts/dev/prepare-dev.sh
ls -alh ./.npm.scripts/dev/prepare-dev.sh
./.npm.scripts/dev/prepare-dev.sh
