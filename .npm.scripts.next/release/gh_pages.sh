#!/bin/bash

# ---

echo "# --- # --- # --- # --- # --- # --- # --- # --- # --- # --- # --- #"
echo "# --- # --- # --- # --- # --- # --- # --- # --- # --- # --- # --- #"
echo "# --- # --- # --- # --- # --- # --- # --- # --- # --- # --- # --- #"
echo "# --- # --- # --- # --- >>> >>> [RELEASE - GITHUB PAGES] <<< <<< "
echo "# --- # ---  [$0]"
echo "# --- # --- # --- # --- # --- # --- # --- # --- # --- # --- # --- #"
echo "# ------ ------ ------ ------ ------ ------ ------ #"
ls -alh  ./.npm.scripts/release/env.sh
source ./.npm.scripts/release/env.sh
echo "# ------ ------ ------ ------ ------ ------ ------ #"
echo "# --- # --- # --- # --- # --- # --- # --- # --- # --- # --- # --- #"
echo "# --- # --- # --- # --- # --- # --- # --- # --- # --- # --- # --- #"
echo "# --- # ---   GH_PAGES_DEPLOYMENT_GIT_BRANCH=[${GH_PAGES_DEPLOYMENT_GIT_BRANCH}]"
echo "# --- # ---   GH_PAGES_DEPLOYMENT_CNAME=[${GH_PAGES_DEPLOYMENT_CNAME}]"
echo "# --- # --- # --- # --- # --- # --- # --- # --- # --- # --- # --- #"
echo "# --- # --- # --- # --- # --- # --- # --- # --- # --- # --- # --- #"
echo "# --- # --- # --- # --- # --- # --- # --- # --- # --- # --- # --- #"


echo "# --- # --- # --- # --- # --- # --- # --- # --- # --- # --- # --- #"

echo "# ----    NOT IMPLEMENTED EXCEPTION"
exit 65
# ---- remake doc : will be triggered by any new commit on a 'release/*' git flow release branch, after youi run a git flow release start.

#   1./ Will run the npm prod build,
#   2./ then copy to 'docs/', and finally will
#   3./ then will generate the CNAME file into the docs folder
#   4./ finish the git flow relase silently, with GnuPG signature
# ---




# -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- #
# -- 1./ run the npm prod build,
# -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- #
echo "# -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- #"
echo "# -- 1./ run the npm prod build,"
echo "# -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- #"

npm run build:prod

# -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- #
# -- 2./ then copy to 'docs/', and finally will
# -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- #
echo "# -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- #"
echo "# -- 2./ then copy to 'docs/', and finally will"
echo "# -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- #"

if [ -d docs/ ]; then
  rm -fr docs/
fi;
mkdir -p docs/

cp ./*.html docs/
cp ./*.css docs/
cp ./config.json docs/

# -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- #
# -- 3./ then will generate the CNAME file into the docs folder
# -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- #

echo "# -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- #"
echo "# -- 3./ then will generate the CNAME file into the docs folder"
echo "# -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- #"

if [ -f ./CNAME ]; then
  rm -f ./CNAME
fi;
echo "${GH_PAGES_DEPLOYMENT_CNAME}" > docs/CNAME
echo "${GH_PAGES_DEPLOYMENT_CNAME}" > CNAME


# -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- #
# -- 4./ finish the git flow relase silently, with GnuPG signature
# -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- #
echo "# -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- #"
echo "# -- 4./ finish the git flow relase silently, with GnuPG signature"
echo "# -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- #"



export GFLOW_RELEASE_COMMIT_MESSAGE=${GFLOW_RELEASE_COMMIT_MESSAGE:-"[https://live.doctothon.org] github pages deployment for early  integration tests"}
export GFLOW_RELEASE_TAG_MESSAGE=${GFLOW_RELEASE_TAG_MESSAGE:-"${GFLOW_RELEASE_COMMIT_MESSAGE}"}


export DO_I_SIGN="false"

if [ "x${DO_I_SIGN}" == "x" ]; then
  echo "# -- "
  export DO_I_SIGN="false"
  echo "# -- DO_I_SIGN is not set, so defaulting its value to [${DO_I_SIGN}]"
  echo "# -- "
fi;


export GIT_MERGE_AUTOEDIT=no


if [ "x${DO_I_SIGN}" = "xtrue" ]; then
  git flow release finish -s "${RELEASE_VERSION_NUMBER}" -m "${GFLOW_RELEASE_COMMIT_MESSAGE}" -T "${GFLOW_RELEASE_TAG_MESSAGE}"
else
  git flow release finish "${RELEASE_VERSION_NUMBER}" -m "${GFLOW_RELEASE_COMMIT_MESSAGE}" -T "${GFLOW_RELEASE_TAG_MESSAGE}"
fi;

unset GIT_MERGE_AUTOEDIT

exit 0
# -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- #
# -- 4./ git push to github pages deployment git branch
# -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- #
echo "# -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- #"
echo "# -- 4./ git push to github pages deployment git branch"
echo "# -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- #"


git add -A && git commit -m "[https://live.doctothon.org] github pages deployment for early  integration tests" && git push -u origin HEAD
