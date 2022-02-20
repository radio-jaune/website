#!/bin/bash

# ---

echo "# --- # --- # --- # --- # --- # --- # --- # --- # --- # --- # --- #"
echo "# --- # --- # --- # --- # --- # --- # --- # --- # --- # --- # --- #"
echo "# --- # --- # --- # --- # --- # --- # --- # --- # --- # --- # --- #"
echo "# --- # --- # -- >>> >>> [DEPLOY - DEV - to https://surge.sh] <<< <<< "
echo "# --- # ---  [$0]"
echo "# --- # --- # --- # --- # --- # --- # --- # --- # --- # --- # --- #"
echo "# --- # --- # --- # --- # --- # --- # --- # --- # --- # --- # --- #"
echo "# --- # --- # --- # --- # --- # --- # --- # --- # --- # --- # --- #"
echo "# --- # --- # --- # --- # --- # --- # --- # --- # --- # --- # --- #"

# ----
#
export QUIJESUIS=$(whoami)
export CURRENT_GIT_COMMIT=$(git rev-parse HEAD)
export SURGE_DELOYMENT_DOMAIN=${SURGE_DELOYMENT_DOMAIN:-"live-${QUIJESUIS}-${CURRENT_GIT_COMMIT}-doctothon.surge.sh"}
export HEROKU_APP_ID=${HEROKU_APP_ID:-"xxxxxxxxxxxxxxxxxxx"}

echo "# --- # ---   SURGE_DELOYMENT_DOMAIN=[${SURGE_DELOYMENT_DOMAIN}]"
echo "# --- # ---   HEROKU_APP_ID=[${HEROKU_APP_ID}]"
echo "# --- # --- # --- # --- # --- # --- # --- # --- # --- # --- # --- #"
echo "# --- # --- # --- # --- # --- # --- # --- # --- # --- # --- # --- #"
echo "# --- # --- # --- # --- # --- # --- # --- # --- # --- # --- # --- #"
echo "# --- # --- # --- # --- # --- # --- # --- # --- # --- # --- # --- #"
