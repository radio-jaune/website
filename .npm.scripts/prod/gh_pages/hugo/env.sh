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
# export DEPLOYMENT_HUGO_BASE_URL=${DEPLOYMENT_HUGO_BASE_URL:-"https://example.com/gohugo"}
export DEPLOYMENT_HUGO_BASE_URL=${DEPLOYMENT_HUGO_BASE_URL:-"https://1718-io.github.io/propositions-relatives-au-ric/"}


export HUGO_DIST_DIR=${HUGO_DIST_DIR:-"./dist"}
export HUGO_DEPLOYMENT_DIR=${HUGO_DEPLOYMENT_DIR:-"./docs"}
echo "# --- # --- # --- # --- # --- # --- # --- # --- # --- # --- # --- #"
echo "# --- # --- # --- # --- # --- # --- # --- # --- # --- # --- # --- #"
echo "# --- # -   NO_CNAME=[${NO_CNAME}]"
echo "# --- # -   CNAME_VALUE=[${CNAME_VALUE}]"
echo "# --- # -   DEPLOYMENT_HUGO_BASE_URL=[${DEPLOYMENT_HUGO_BASE_URL}]"
echo "# --- # -   HUGO_DIST_DIR=[${HUGO_DIST_DIR}]"
echo "# --- # -   HUGO_DEPLOYMENT_DIR=[${HUGO_DEPLOYMENT_DIR}]"
echo "# --- # --- # --- # --- # --- # --- # --- # --- # --- # --- # --- #"
echo "# --- # --- # --- # --- # --- # --- # --- # --- # --- # --- # --- #"
echo "# --- # --- # --- # --- # --- # --- # --- # --- # --- # --- # --- #"
echo "# --- # --- # --- # --- # --- # --- # --- # --- # --- # --- # --- #"
