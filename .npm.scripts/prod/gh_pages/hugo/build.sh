#!/bin/bash


Usage () {
  echo "!!! >>> ----- ----- ----- ----- -----  <<< !!! "
  echo "!!! >>> ----- ----- ----- ----- -----  <<< !!! "
  echo "!!! >>> ----- ----- ----- ----- -----  <<< !!! "
  echo "!!! >>> ----- ----- ----- ----- -----  <<< !!! "
  echo "!!! >>> Usage: "
  echo " -- --- - "
  echo " "
  echo "   Example without any CNAME File:"
  echo " "
  echo "           export DEPLOYMENT_HUGO_BASE_URL=\"https://example.com/gohugo\" "
  echo "           export NO_CNAME=true "
  echo "           $0 "
  echo " "
  echo " "
  echo " -- --- - "
  echo " "
  echo "   Example with a CNAME File:"
  echo " "
  echo "           export DEPLOYMENT_HUGO_BASE_URL=\"https://mywebsite.io/imawesome\" "
  echo "           export NO_CNAME=false "
  echo "           export CNAME_VALUE=mywebsite.io "
  echo "           $0 "
  echo " "
  echo " -- --- - "
  echo "           Env. variables:  "
  echo "             + DEPLOYMENT_HUGO_BASE_URL will be used by the hugo build, as Hugo base Url, 'hugo --baseURL <Hugo base Url>' "
  echo "             + if NO_CNAME env var is not set, or set to false, then a CNAME file will be generated, and the CNAME_VALUE variable must be set."
  echo "             + if NO_CNAME env var is set to true, then no CNAME file will be generated, and the CNAME_VALUE variable will be ignored if it is set."
  echo " "
  echo "!!! >>> ----- ----- ----- ----- -----  <<< !!! "
  echo "!!! >>> ----- ----- ----- ----- -----  <<< !!! "
}

runHugoBuild () {
  echo "!!! >>> ----- ----- ----- ----- -----  <<< !!! "
  echo "!!! >>> ----- runHugoBuild ()  <<< !!! "
  echo "!!! >>> ----- ----- ----- ----- -----  <<< !!! "
  echo "!!! >>> ----- HUGO BUILD  <<< !!! "
  echo "!!! >>> ----- ----- ----- ----- -----  <<< !!! "
  echo "!!! >>> ----- ----- ----- ----- -----  <<< !!! "
  if [ "x${HUGO_DIST_DIR}" == "x" ]; then
    echo "The HUGO_DIST_DIR environment variable is not set, and MUST be set!"
    exit 17
  fi;
  if [ "x${HUGO_DEPLOYMENT_DIR}" == "x" ]; then
    echo "The HUGO_DEPLOYMENT_DIR environment variable is not set, and MUST be set!"
    exit 19
  fi;
  echo "# --- # --- # --- # --- # --- # --- # --- # --- # --- # --- # --- #"
  echo "# --- # - + runHugoBuild ()  <<< !!! "
  echo "# --- # --- # --- # --- # --- # --- # --- # --- # --- # --- # --- #"
  echo "# --- # --- # --- # --- # --- # --- # --- # --- # --- # --- # --- #"
  echo "# --- # -   HUGO_DIST_DIR=[${HUGO_DIST_DIR}]"
  echo "# --- # -   HUGO_DEPLOYMENT_DIR=[${HUGO_DEPLOYMENT_DIR}]"
  echo "# --- # --- # --- # --- # --- # --- # --- # --- # --- # --- # --- #"
  echo "# --- # --- # --- # --- # --- # --- # --- # --- # --- # --- # --- #"
  # hugo -D -b ${DEPLOYMENT_HUGO_BASE_URL}
  if [ -d ${HUGO_DIST_DIR} ]; then
    rm -fr ${HUGO_DIST_DIR}
  fi;
  mkdir -p ./${HUGO_DIST_DIR}
  if [ -d ${HUGO_DEPLOYMENT_DIR} ]; then
    rm -fr ${HUGO_DEPLOYMENT_DIR}
  fi;
  mkdir -p ./${HUGO_DEPLOYMENT_DIR}
  hugo -b ${DEPLOYMENT_HUGO_BASE_URL} -d ${HUGO_DIST_DIR}
  hugo -b ${DEPLOYMENT_HUGO_BASE_URL} -d ${HUGO_DEPLOYMENT_DIR}
  
}

# first load all env vars

echo "# --- # --- # --- # --- # --- # --- # --- # --- # --- # --- # --- #"
echo "# --- # --- # --- # --- # --- # --- # --- # --- # --- # --- # --- #"
echo "# --- # --- # --- # --- # --- # --- # --- # --- # --- # --- # --- #"
echo "# --- # --- # --- # --- >>> >>> [BUILD - PROD] <<< <<< "
echo "# --- # ---  [$0]"
echo "# --- # --- # --- # --- # --- # --- # --- # --- # --- # --- # --- #"
echo "# --- # --- # --- # --- # --- # --- # --- # --- # --- # --- # --- #"
echo "# ------ ------ ------ ------ ------ ------ ------ #"
ls -alh  ./.npm.scripts/prod/gh_pages/env.sh
source ./.npm.scripts/prod/gh_pages/env.sh
echo "# ------ ------ ------ ------ ------ ------ ------ #"
echo "# ------ -  PATH=[${PATH}]"
echo "# --- # --- # --- # --- # --- # --- # --- # --- # --- # --- # --- #"
echo "# --- # --- # --- # --- # --- # --- # --- # --- # --- # --- # --- #"
echo "# --- # --- # --- # --- # --- # --- # --- # --- # --- # --- # --- #"




if [ "x${NO_CNAME}" == "x" ]; then
  echo "The NO_CNAME environment variable is not set. Defaulting NO_CNAME to [${NO_CNAME}]"
fi;


runHugoBuild



if ! [ "x${NO_CNAME}" == "x" ]; then
  echo "The NO_CNAME environment variable is set. Its value is [${NO_CNAME}]."
  if [ "${NO_CNAME}" == "true" ]; then
    echo "The NO_CNAME environment variable is set to true. No CNAME File will be generated."
  else
    if [ "${NO_CNAME}" == "false" ]; then
        echo "The NO_CNAME environment variable is set to false. A CNAME File will be generated. And the CNAME_VALUE env.var. must be set."
        if [ "x${CNAME_VALUE}" == "x" ]; then
          echo "The CNAME_VALUE environment variable is not set. Since the NO_CNAME environment variable is set to false, the CNAME_VALUE must be set"
          exit 7
        else
          echo "${CNAME_VALUE}" > ./${HUGO_DEPLOYMENT_DIR}/CNAME
        fi;
    else 
      echo "The NO_CNAME environment variable is set, but its value is [${NO_CNAME}]. The NO_CNAME environment variable must be set to either 'true', or 'false', no other value."
      exit 11
    fi;
  fi;
fi;
