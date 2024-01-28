#!/bin/bash

# ---

echo "# --- # --- # --- # --- # --- # --- # --- # --- # --- # --- # --- #"
echo "# --- # --- # --- # --- # --- # --- # --- # --- # --- # --- # --- #"
echo "# --- # --- # --- # --- # --- # --- # --- # --- # --- # --- # --- #"
echo "# --- # --- # --- # --- >>> >>> [BUILD - ENV] <<< <<< "
echo "# --- # ---  [$0]"
echo "# --- # --- # --- # --- # --- # --- # --- # --- # --- # --- # --- #"
echo "# --- # --- # --- # --- # --- # --- # --- # --- # --- # --- # --- #"
echo "# --- # --- # --- # --- # --- # --- # --- # --- # --- # --- # --- #"
echo "# --- # --- # --- # --- # --- # --- # --- # --- # --- # --- # --- #"

# echo "# ----    NO VARS IN PROD ENV FOR NOW"
export NO_CNAME=${NO_CNAME:-"true"}
export CNAME_VALUE=${CNAME_VALUE:-"example.com"}
export CNAME_VALUE=${CNAME_VALUE:-"1718-io.github.io"}
# export DEPLOYMENT_ASTRO_BASE_CONFIG=${DEPLOYMENT_ASTRO_BASE_CONFIG:-"https://example.com/gohugo"}
export DEPLOYMENT_ASTRO_BASE_CONFIG=${DEPLOYMENT_ASTRO_BASE_CONFIG:-"/website"}
export DEPLOYMENT_ASTRO_SITE_CONFIG=${DEPLOYMENT_ASTRO_SITE_CONFIG:-"https://radio-jaune.github.io"}


# --- protection against well known git bash for windows issues : 

export DEPLOYMENT_ASTRO_BASE_CONFIG=$(echo "${DEPLOYMENT_ASTRO_BASE_CONFIG}" | awk -F '/' '{print $NF}')
export DEPLOYMENT_ASTRO_BASE_CONFIG="/${DEPLOYMENT_ASTRO_BASE_CONFIG}"


export ASTRO_DIST_DIR=${ASTRO_DIST_DIR:-"./dist"}
export GH_PAGES_DEPLOYMENT_DIR=${GH_PAGES_DEPLOYMENT_DIR:-"./docs"}
echo "# --- # --- # --- # --- # --- # --- # --- # --- # --- # --- # --- #"
echo "# --- # --- # --- # --- # --- # --- # --- # --- # --- # --- # --- #"
echo "# --- # -   NO_CNAME=[${NO_CNAME}]"
echo "# --- # -   CNAME_VALUE=[${CNAME_VALUE}]"
echo "# --- # -   DEPLOYMENT_ASTRO_BASE_CONFIG=[${DEPLOYMENT_ASTRO_BASE_CONFIG}]"
echo "# --- # -   DEPLOYMENT_ASTRO_SITE_CONFIG=[${DEPLOYMENT_ASTRO_SITE_CONFIG}]"
echo "# --- # -   ASTRO_DIST_DIR=[${ASTRO_DIST_DIR}]"
echo "# --- # -   GH_PAGES_DEPLOYMENT_DIR=[${GH_PAGES_DEPLOYMENT_DIR}]"
echo "# --- # --- # --- # --- # --- # --- # --- # --- # --- # --- # --- #"
echo "# --- # --- # --- # --- # --- # --- # --- # --- # --- # --- # --- #"
echo "# --- # --- # --- # --- # --- # --- # --- # --- # --- # --- # --- #"
echo "# --- # --- # --- # --- # --- # --- # --- # --- # --- # --- # --- #"
