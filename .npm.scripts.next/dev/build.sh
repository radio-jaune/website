#!/bin/bash

# ---

echo "# --- # --- # --- # --- # --- # --- # --- # --- # --- # --- # --- #"
echo "# --- # --- # --- # --- # --- # --- # --- # --- # --- # --- # --- #"
echo "# --- # --- # --- # --- # --- # --- # --- # --- # --- # --- # --- #"
echo "# --- # --- # --- # --- >>> >>> [BUILD - DEV] <<< <<< "
echo "# --- # ---  [$0]"
echo "# --- # --- # --- # --- # --- # --- # --- # --- # --- # --- # --- #"
echo "# --- # --- # --- # --- # --- # --- # --- # --- # --- # --- # --- #"
echo "# ------ ------ ------ ------ ------ ------ ------ #"
ls -alh ./.npm.scripts/dev/env.sh
source ./.npm.scripts/dev/env.sh
echo "# ------ ------ ------ ------ ------ ------ ------ #"
echo "# ------ -  PATH=[${PATH}]"
echo "# --- # --- # --- # --- # --- # --- # --- # --- # --- # --- # --- #"
echo "# ----    NO OPERATIONS IN DEV BUILD FOR NOW"
echo "# --- # --- # --- # --- # --- # --- # --- # --- # --- # --- # --- #"
# ----
#   1./ Will run the npm dev build,
#   2./ then copy to 'dist/', and finally will
#   3./ then will generate the CNAME file into the dist folder
# ---

# -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- #
# -- 1./ run the npm dev build,
# -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- #
echo "# -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- #"
echo "# -- 1./ run the npm dev build,"
echo "# -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- #"

echo "nothing in the dev build for the moment"

# -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- #
# -- 2./ then copy to 'dist/', and finally will
# -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- #
echo "# -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- #"
echo "# -- 2./ then copy to 'dist/', and finally will"
echo "# -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- #"

if [ -d dist/ ]; then
  rm -fr dist/
fi;
mkdir -p dist/

cp ./*.html dist/
cp ./*.css dist/
cp ./config.json dist/
cp ./affiche-*.jpg dist/
cp ./favicon.ico dist/

# -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- #
# -- 3./ then will generate the CNAME file into the dist folder
# -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- #

echo "# -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- #"
echo "# -- 3./ then will generate the CNAME file into the dist folder"
echo "# -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- #"

if [ -f ./CNAME ]; then
  rm -f ./CNAME
fi;
echo "${GH_PAGES_DEPLOYMENT_CNAME}" > dist/CNAME
echo "${GH_PAGES_DEPLOYMENT_CNAME}" > CNAME
