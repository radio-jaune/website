#!/bin/bash

# ---

echo "# --- # --- # --- # --- # --- # --- # --- # --- # --- # --- # --- #"
echo "# --- # --- # --- # --- # --- # --- # --- # --- # --- # --- # --- #"
echo "# --- # --- # --- # --- # --- # --- # --- # --- # --- # --- # --- #"
echo "# --- # --- # -- >>> >>> [DEPLOY - DEV - to https://surge.sh] <<< <<< "
echo "# --- # ---  [$0]"
echo "# --- # --- # --- # --- # --- # --- # --- # --- # --- # --- # --- #"
echo "# ------ ------ ------ ------ ------ ------ ------ #"
ls -alh  ./.npm.scripts/dev/env.sh
source ./.npm.scripts/dev/env.sh
ls -alh .npm.scripts/dev/deploy/env.sh
source .npm.scripts/dev/deploy/env.sh
echo "# ------ ------ ------ ------ ------ ------ ------ #"
echo "# --- # --- # --- # --- # --- # --- # --- # --- # --- # --- # --- #"
echo "# --- # --- # --- # --- # --- # --- # --- # --- # --- # --- # --- #"
echo "# --- # ---   SURGE_DELOYMENT_DOMAIN=[${SURGE_DELOYMENT_DOMAIN}]"
echo "# --- # --- # --- # --- # --- # --- # --- # --- # --- # --- # --- #"
echo "# --- # --- # --- # --- # --- # --- # --- # --- # --- # --- # --- #"
echo "# --- # --- # --- # --- # --- # --- # --- # --- # --- # --- # --- #"

while true; do
    read -p "Do you confirm you want to deploy to ${SURGE_DELOYMENT_DOMAIN} ?" yn
    case $yn in
        [Yy]* ) echo "Proceeding with surge deployment to ${SURGE_DELOYMENT_DOMAIN} ..."; break;;
        [Nn]* ) exit;;
        * ) echo "Please answer yes or no.";;
    esac
done
# ----
#   1./ Will run the npm dev build,
#   2./ surge deploy the dist/ folder to ${SURGE_DELOYMENT_DOMAIN}
# ---

# -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- #
# -- 1./ run the npm dev build,
# -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- #
echo "# -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- #"
echo "# -- 1./ run the npm dev build,"
echo "# -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- #"

npm run build:dev


# -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- #
# -- 2./ surge deploy the dist/ folder to ${SURGE_DELOYMENT_DOMAIN}
# -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- #
echo "# -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- #"
echo "# -- 3./ surge deploy the dist/ folder to [${SURGE_DELOYMENT_DOMAIN}]"
echo "# -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- #"

surge  ./dist/ ${SURGE_DELOYMENT_DOMAIN}
