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
  echo "           export DEPLOYMENT_ASTRO_BASE_CONFIG=\"https://example.com/gohugo\" "
  echo "           export NO_CNAME=true "
  echo "           $0 "
  echo " "
  echo " "
  echo " -- --- - "
  echo " "
  echo "   Example with a CNAME File:"
  echo " "
  echo "           export DEPLOYMENT_ASTRO_BASE_CONFIG=\"https://mywebsite.io/imawesome\" "
  echo "           export NO_CNAME=false "
  echo "           export CNAME_VALUE=mywebsite.io "
  echo "           $0 "
  echo " "
  echo " -- --- - "
  echo "           Env. variables:  "
  echo "             + DEPLOYMENT_ASTRO_BASE_CONFIG will be used by the hugo build, as Hugo base Url, 'hugo --baseURL <Hugo base Url>' "
  echo "             + if NO_CNAME env var is not set, or set to false, then a CNAME file will be generated, and the CNAME_VALUE variable must be set."
  echo "             + if NO_CNAME env var is set to true, then no CNAME file will be generated, and the CNAME_VALUE variable will be ignored if it is set."
  echo " "
  echo "!!! >>> ----- ----- ----- ----- -----  <<< !!! "
  echo "!!! >>> ----- ----- ----- ----- -----  <<< !!! "
}

runAstroBuild () {
  echo "!!! >>> ----- ----- ----- ----- -----  <<< !!! "
  echo "!!! >>> ----- runAstroBuild ()  <<< !!! "
  echo "!!! >>> ----- ----- ----- ----- -----  <<< !!! "
  echo "!!! >>> ----- HUGO BUILD  <<< !!! "
  echo "!!! >>> ----- ----- ----- ----- -----  <<< !!! "
  echo "!!! >>> ----- ----- ----- ----- -----  <<< !!! "
  if [ "x${ASTRO_DIST_DIR}" == "x" ]; then
    echo "The ASTRO_DIST_DIR environment variable is not set, and MUST be set!"
    exit 17
  fi;
  if [ "x${GH_PAGES_DEPLOYMENT_DIR}" == "x" ]; then
    echo "The GH_PAGES_DEPLOYMENT_DIR environment variable is not set, and MUST be set!"
    exit 19
  fi;
  echo "# --- # --- # --- # --- # --- # --- # --- # --- # --- # --- # --- #"
  echo "# --- # - + runAstroBuild ()  <<< !!! "
  echo "# --- # --- # --- # --- # --- # --- # --- # --- # --- # --- # --- #"
  echo "# --- # --- # --- # --- # --- # --- # --- # --- # --- # --- # --- #"
  echo "# --- # -   ASTRO_DIST_DIR=[${ASTRO_DIST_DIR}]"
  echo "# --- # -   GH_PAGES_DEPLOYMENT_DIR=[${GH_PAGES_DEPLOYMENT_DIR}]"
  echo "# --- # -   DEPLOYMENT_ASTRO_BASE_CONFIG=[${DEPLOYMENT_ASTRO_BASE_CONFIG}]"
  echo "# --- # -   DEPLOYMENT_ASTRO_SITE_CONFIG=[${DEPLOYMENT_ASTRO_SITE_CONFIG}]"
  echo "# --- # --- # --- # --- # --- # --- # --- # --- # --- # --- # --- #"
  echo "# --- # --- # --- # --- # --- # --- # --- # --- # --- # --- # --- #"
  # hugo -D -b ${DEPLOYMENT_ASTRO_BASE_CONFIG}
  if [ -d ${ASTRO_DIST_DIR} ]; then
    rm -fr ${ASTRO_DIST_DIR}
  fi;
  mkdir -p ${ASTRO_DIST_DIR}
  if [ -d ${GH_PAGES_DEPLOYMENT_DIR} ]; then
    rm -fr ${GH_PAGES_DEPLOYMENT_DIR}
  fi;
  mkdir -p ${GH_PAGES_DEPLOYMENT_DIR}
  pnpm run build - --outDir ${GH_PAGES_DEPLOYMENT_DIR}

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
ls -alh  ./.npm.scripts/prod/gh_pages/astro/env.sh
source ./.npm.scripts/prod/gh_pages/astro/env.sh
echo "# ------ ------ ------ ------ ------ ------ ------ #"
echo "# ------ -  PATH=[${PATH}]"
echo "# --- # --- # --- # --- # --- # --- # --- # --- # --- # --- # --- #"
echo "# --- # --- # --- # --- # --- # --- # --- # --- # --- # --- # --- #"
echo "# --- # --- # --- # --- # --- # --- # --- # --- # --- # --- # --- #"




if [ "x${NO_CNAME}" == "x" ]; then
  echo "The NO_CNAME environment variable is not set. Defaulting NO_CNAME to [${NO_CNAME}]"
fi;


runAstroBuild



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
          echo "${CNAME_VALUE}" > ./${GH_PAGES_DEPLOYMENT_DIR}/CNAME
        fi;
    else 
      echo "The NO_CNAME environment variable is set, but its value is [${NO_CNAME}]. The NO_CNAME environment variable must be set to either 'true', or 'false', no other value."
      exit 11
    fi;
  fi;
fi;
