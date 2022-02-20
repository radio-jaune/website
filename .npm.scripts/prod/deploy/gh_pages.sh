#!/bin/bash

# ---

echo "# --- # --- # --- # --- # --- # --- # --- # --- # --- # --- # --- #"
echo "# --- # --- # --- # --- # --- # --- # --- # --- # --- # --- # --- #"
echo "# --- # --- # --- # --- # --- # --- # --- # --- # --- # --- # --- #"
echo "# --- # --- # -- >>> >>> [DEPLOY - PROD - GITHUB PAGES] <<< <<< "
echo "# --- # ---  [$0]"
echo "# --- # --- # --- # --- # --- # --- # --- # --- # --- # --- # --- #"
echo "# ------ ------ ------ ------ ------ ------ ------ #"
ls -alh  ./.npm.scripts/prod/env.sh
source ./.npm.scripts/prod/env.sh
ls -alh .npm.scripts/prod/deploy/env.sh
source .npm.scripts/prod/deploy/env.sh
echo "# ------ ------ ------ ------ ------ ------ ------ #"
echo "# ------ -  PATH=[${PATH}]"
echo "# --- # --- # --- # --- # --- # --- # --- # --- # --- # --- # --- #"
echo "# --- # --- # --- # --- # --- # --- # --- # --- # --- # --- # --- #"
echo "# --- # ---   GH_PAGES_DEPLOYMENT_GIT_BRANCH=[${GH_PAGES_DEPLOYMENT_GIT_BRANCH}]"
echo "# --- # ---   GH_PAGES_DEPLOYMENT_CNAME=[${GH_PAGES_DEPLOYMENT_CNAME}]"
echo "# --- # --- # --- # --- # --- # --- # --- # --- # --- # --- # --- #"
echo "# --- # --- # --- # --- # --- # --- # --- # --- # --- # --- # --- #"
echo "# --- # --- # --- # --- # --- # --- # --- # --- # --- # --- # --- #"

# ----
#   1./ Will run the npm prod build,
#   2./ then copy to 'docs/', and finally will
#   3./ then will generate the CNAME file into the docs folder
#   4./ git push to github pages deployment git branch
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

cp -fR ./dist/* docs/

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

export CURRENT_GIT_BRANCH=$(git branch -l | grep '*' | awk '{print $2}')
export CURRENT_GIT_COMMIT=$(git rev-parse HEAD)
cat <<EOF> ./zequestion.txt
# --- * --- * --- * --- * --- * --- * --- * --- * --- * --- * --- #
# --- * --- * --- * --- * --- * --- * --- * --- * --- * --- * --- #
# --- * --- * --- * --- * --- * --- * --- * --- * --- * --- * --- #
Do you confirm you want to deploy to Github Pages :

 - from the [${GH_PAGES_DEPLOYMENT_GIT_BRANCH}] git branch
 - to the [${GH_PAGES_DEPLOYMENT_CNAME}] deployment target CNAME

  ? (y/n)

# --- *
# --- * (Info: the current git commit is [${CURRENT_GIT_COMMIT}] )
# --- * (Info: the current git branch is [${CURRENT_GIT_BRANCH}] )
# --- *
# --- * --- * --- * --- * --- * --- * --- * --- * --- * --- * --- #

-
EOF
export ZE_QUESTION=$(cat ./zequestion.txt)
while true; do
    read -p "${ZE_QUESTION}" yn
    case $yn in
        [Yy]* ) echo "Proceeding with Github Pages deployment to https://${GH_PAGES_DEPLOYMENT_CNAME} ..."; break;;
        [Nn]* ) exit;;
        * ) echo "Please answer yes or no.";;
    esac
done


# -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- #
# -- 4./ git push to github pages deployment git branch
# -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- #
echo "# -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- #"
echo "# -- 4./ git push to github pages deployment git branch"
echo "# -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- #"

git add -A && git commit -m "[https://live.doctothon.org] github pages deployment" && git push -u origin HEAD
