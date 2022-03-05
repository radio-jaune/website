#!/bin/bash
echo "# ------ ------ ------ ------ ------ ------ ------ #"
echo "# ------ ------ ------ ------ ------ ------ ------ #"
echo "# ------ ------ ------ ------ ------ ------ ------ #"
echo "# ------ -- [$0]"
echo "# ------ --  (All npm) global installations"
echo "# ------ ------ ------ ------ ------ ------ ------ #"
echo "# ------ ------ ------ ------ ------ ------ ------ #"
echo "# ------ ------ ------ ------ ------ ------ ------ #"
echo "# ------ ------ ------ ------ ------ ------ ------ #"
ls -alh ./.npm.scripts/dev/env.sh
source ./.npm.scripts/dev/env.sh
echo "# ------ ------ ------ ------ ------ ------ ------ #"
echo "# ------ -  PATH=[${PATH}]"
# ----
#
export SOME_ENV_VAR_YOU_WANT=${SOME_ENV_VAR_YOU_WANT:-"its default value if not set"}

echo "# --- # ---   SOME_ENV_VAR_YOU_WANT=[${SOME_ENV_VAR_YOU_WANT}]"
echo "# ------ ------ ------ ------ ------ ------ ------ #"
echo "# ------ ------ ------ ------ ------ ------ ------ #"

# ------ ------ ------ ------ ------ ------ ------ #
# ------ ------ ------ ------ ------ ------ ------ #
# ------ ------ ------ ------ ------ ------ ------ #
# ------ ------ ------ ------ ------ ------ ------ #
# ------ --  (All npm) global installations
# ------ ------ ------ ------ ------ ------ ------ #
# ------ ------ ------ ------ ------ ------ ------ #
# ------ ------ ------ ------ ------ ------ ------ #
# ------ ------ ------ ------ ------ ------ ------ #

export GULP_CLI_VERSION=${GULP_CLI_VERSION:-"2.3.0"}
export SASS_VERSION=${SASS_VERSION:-"latest"}
export SERVE_VERSION=${SERVE_VERSION:-"13.0.2"}
# surge --version on my machine gives : v0.23.0
export SURGE_VERSION=${SURGE_VERSION:-"0.23.0"}

# npm install -g sass@${SASS_VERSION}
npm uninstall --global gulp-cli
npm uninstall --global serve
npm uninstall --global surge

npm install --global gulp-cli@${GULP_CLI_VERSION}
npm install --global serve@${SURGE_VERSION}
