#!/bin/bash

# ---

echo "# --- # --- # --- # --- # --- # --- # --- # --- # --- # --- # --- #"
echo "# --- # --- # --- # --- # --- # --- # --- # --- # --- # --- # --- #"
echo "# --- # --- # --- # --- # --- # --- # --- # --- # --- # --- # --- #"
echo "# --- # --- # --- # --- >>> >>> [RELEASE - GITHUB PAGES] <<< <<< "
echo "# --- # ---  [$0]"
echo "# --- # --- # --- # --- # --- # --- # --- # --- # --- # --- # --- #"
echo "# --- # --- # --- # --- # --- # --- # --- # --- # --- # --- # --- #"
echo "# --- # --- # --- # --- # --- # --- # --- # --- # --- # --- # --- #"
echo "# --- # --- # --- # --- # --- # --- # --- # --- # --- # --- # --- #"

# ----
#
export GH_PAGES_DEPLOYMENT_GIT_BRANCH=${GH_PAGES_DEPLOYMENT_GIT_BRANCH:-"monkey/tests-integration"}
export GH_PAGES_DEPLOYMENT_CNAME=${GH_PAGES_DEPLOYMENT_CNAME:-"live.doctothon.org"}
export HEROKU_APP_ID=${HEROKU_APP_ID:-"xxxxxxxxxxxxxxxxxxx"}
export RELEASE_VERSION_NUMBER=${RELEASE_VERSION_NUMBER:-"0.0.0"}

echo "# --- # ---   GH_PAGES_DEPLOYMENT_GIT_BRANCH=[${GH_PAGES_DEPLOYMENT_GIT_BRANCH}]"
echo "# --- # ---   GH_PAGES_DEPLOYMENT_CNAME=[${GH_PAGES_DEPLOYMENT_CNAME}]"
echo "# --- # ---   HEROKU_APP_ID=[${HEROKU_APP_ID}]"
echo "# --- # ---   RELEASE_VERSION_NUMBER=[${RELEASE_VERSION_NUMBER}]"
echo "# --- # --- # --- # --- # --- # --- # --- # --- # --- # --- # --- #"
echo "# --- # --- # --- # --- # --- # --- # --- # --- # --- # --- # --- #"
echo "# --- # --- # --- # --- # --- # --- # --- # --- # --- # --- # --- #"
echo "# --- # --- # --- # --- # --- # --- # --- # --- # --- # --- # --- #"
