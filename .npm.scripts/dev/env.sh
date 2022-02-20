#!/bin/bash

# ---

echo "# --- # --- # --- # --- # --- # --- # --- # --- # --- # --- # --- #"
echo "# --- # --- # --- # --- # --- # --- # --- # --- # --- # --- # --- #"
echo "# --- # --- # --- # --- # --- # --- # --- # --- # --- # --- # --- #"
echo "# --- # --- # --- # --- >>> >>> [ENV - DEV] <<< <<< "
echo "# --- # ---  [$0]"
echo "# --- # --- # --- # --- # --- # --- # --- # --- # --- # --- # --- #"
echo "# --- # --- # --- # --- # --- # --- # --- # --- # --- # --- # --- #"
echo "# --- # --- # --- # --- # --- # --- # --- # --- # --- # --- # --- #"

# ----
#
export SOME_ENV_VAR_YOU_WANT=${SOME_ENV_VAR_YOU_WANT:-"its default value if not set"}
export PATH=$PATH:/usr/local/go/bin
export HUGO_HOST=${HUGO_HOST:-"127.0.0.1"}
export HUGO_PORT=${HUGO_PORT:-"4547"}
export HUGO_BASE_URL=${HUGO_BASE_URL:-"http://127.0.0.1:5445"}
export HUGO_BASE_URL=${HUGO_BASE_URL:-"http://${HUGO_HOST}:${HUGO_PORT}"}
export HUGO_BLABLA=${HUGO_BLABLA:-"i'm the best at Gulp, man, iam a devops"}

echo "# --- # ---   SOME_ENV_VAR_YOU_WANT=[${SOME_ENV_VAR_YOU_WANT}]"
echo "# --- # --- # --- # --- # --- # --- # --- # --- # --- # --- # --- #"
echo "# --- # ---   PATH=[${PATH}]"
echo "# --- # --- # --- # --- # --- # --- # --- # --- # --- # --- # --- #"
echo "# --- # ---   HUGO_HOST=[${HUGO_HOST}]"
echo "# --- # ---   HUGO_PORT=[${HUGO_PORT}]"
echo "# --- # ---   HUGO_BASE_URL=[${HUGO_BASE_URL}]"
echo "# --- # ---   HUGO_BASE_URL=[${HUGO_BASE_URL}]"
echo "# --- # ---   HUGO_BLABLA=[${HUGO_BLABLA}]"
echo "# --- # --- # --- # --- # --- # --- # --- # --- # --- # --- # --- #"
echo "# --- # --- # --- # --- # --- # --- # --- # --- # --- # --- # --- #"
echo "# --- # --- # --- # --- # --- # --- # --- # --- # --- # --- # --- #"
echo "# --- # --- # --- # --- # --- # --- # --- # --- # --- # --- # --- #"
