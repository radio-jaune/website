#!/bin/bash

echo "# ------ ------ ------ ------ ------ ------ ------ #"
echo "# ------ ------ ------ ------ ------ ------ ------ #"
echo "# ------ ------ ------ ------ ------ ------ ------ #"
echo "# ------ -- [$0]"
echo "# ------ --  (All npm) project local installations"
echo "# ------ ------ ------ ------ ------ ------ ------ #"
echo "# ------ ------ ------ ------ ------ ------ ------ #"
ls -alh ./.npm.scripts/dev/env.sh
source ./.npm.scripts/dev/env.sh
echo "# ------ ------ ------ ------ ------ ------ ------ #"
echo "# ------ -  PATH=[${PATH}]"
# ----
#
export SOME_ENV_VAR_YOU_WANT=${SOME_ENV_VAR_YOU_WANT:-"its default value if not set"}

echo "# --- # ---   SOME_ENV_VAR_YOU_WANT=[${SOME_ENV_VAR_YOU_WANT}]"
echo "# ------ ------ ------ ------ ------ ------ ------ #"
echo "# ------ ------ ------ ------ ------ ------ ------ #"

# ------ ------ ------ ------ ------ ------ ------ #
# ------ ------ ------ ------ ------ ------ ------ #
# ------ ------ ------ ------ ------ ------ ------ #
# ------ ------ ------ ------ ------ ------ ------ #
# ------ --  (All npm) project local installations
# ------ ------ ------ ------ ------ ------ ------ #
# ------ ------ ------ ------ ------ ------ ------ #
# ------ ------ ------ ------ ------ ------ ------ #
# ------ ------ ------ ------ ------ ------ ------ #

## - ### ## - ### ## - ### ## - ### ## - ###
## - ### // "devDependencies": {
## - ### //   "browser-sync": "^2.27.7",
## - ### //   "gulp": "^4.0.2",
## - ### //   "gulp-beautify": "^3.0.0",
## - ### //   "gulp-dest-clean": "^0.5.0",
## - ### //   "gulp-purgecss": "^4.1.3",
## - ### //   "gulp-sass": "^5.1.0",
## - ### //   "gulp-seo": "^1.0.2",
## - ### //   "gulp-util": "^3.0.8",
## - ### //   "node-sass": "^7.0.1"
## - ### // }
## - ### ## - ### ## - ### ## - ### ## - ###

export BABEL_REGISTER_VERSION=${BABEL_REGISTER_VERSION:-"^7.17.0"}
export GULP_NODE_SASS_VERSION=${GULP_NODE_SASS_VERSION:-"^7.0.1"}
export GULP_VERSION=${GULP_VERSION:-"^4.0.2"}
# export GULP_VERSION=${GULP_VERSION:-"^3.9.1"}

export GULP_PURGECSS_VERSION=${GULP_PURGECSS_VERSION:-"^4.1.3"}
export GULP_SASS_VERSION=${GULP_SASS_VERSION:-"^5.1.0"}
export GULP_BEAUTIFY_VERSION=${GULP_BEAUTIFY_VERSION:-"^3.0.0"}
export GULP_SEO_VERSION=${GULP_SEO_VERSION:-"^1.0.2"}
export GULP_UTIL_VERSION=${GULP_UTIL_VERSION:-"^3.0.8"}
export GULP_DEST_CLEAN_VERSION=${GULP_DEST_CLEAN_VERSION:-"^0.5.0"}
export GULP_BROWSER_SYNC_VERSION=${GULP_BROWSER_SYNC_VERSION:-"^2.27.7"}
export GULP_DEBUG_VERSION=${GULP_DEBUG_VERSION:-"^4.0.0"}
export GULP_NEWER_VERSION=${GULP_NEWER_VERSION:-"^1.4.0"}
# ---
#
# export GULP_IMAGEMIN_VERSION=${GULP_IMAGEMIN_VERSION:-"^8.0.0"}
export GULP_IMAGEMIN_VERSION=${GULP_IMAGEMIN_VERSION:-"^7.1.0"}
export GULP_MINIFY_VERSION=${GULP_MINIFY_VERSION:-"^3.1.0"}
export GULP_UGLIFY_VERSION=${GULP_UGLIFY_VERSION:-"^3.0.2"}
export GULP_READABLE_STREAM_VERSION=${GULP_READABLE_STREAM_VERSION:-"^3.6.0"}
export GULP_SOURCEMAPS_VERSION=${GULP_SOURCEMAPS_VERSION:-"^3.0.0"}
export GULP_AUTOPREFIXER_VERSION=${GULP_AUTOPREFIXER_VERSION:-"^8.0.0"}
export GULP_RENAME_VERSION=${GULP_RENAME_VERSION:-"^2.0.0"}
export GULP_DOTENV_VERSION=${GULP_DOTENV_VERSION:-"^16.0.0"}
export GULP_IMAGEMIN_PNGQUANT_VERSION=${GULP_IMAGEMIN_PNGQUANT_VERSION:-"9.0.2"}
export GULP_BABEL_CORE_VERSION=${GULP_BABEL_CORE_VERSION:-"^7.17.2"}
export GULP_BABEL_REGISTER_VERSION=${GULP_BABEL_REGISTER_VERSION:-"^7.17.0"}
export GULP_BABEL_PRESET_ENV_VERSION=${GULP_BABEL_PRESET_ENV_VERSION:-"^7.16.11"}
export GULP_NODE_FETCH_VERSION=${GULP_NODE_FETCH_VERSION:-"^2.6.1"}
export GULP_CLEAN_CSS_VERSION=${GULP_CLEAN_CSS_VERSION:-"^4.3.0"}
export GULP_DEL_VERSION=${GULP_DEL_VERSION:-"^6.0.0"}
export GULP_HTML_REPLACE_VERSION=${GULP_HTML_REPLACE_VERSION:-"^1.6.2"}

export GULP_FIND_VERSION=${GULP_FIND_VERSION:-"^0.0.10"}
export GULP_REPLACE_VERSION=${GULP_REPLACE_VERSION:-"^1.1.3"}


export GULP_IF_VERSION=${GULP_IF_VERSION:-"^3.0.0"}
export GULP_USEREF_VERSION=${GULP_USEREF_VERSION:-"^5.0.0"}
export GULP_TAP_VERSION=${GULP_TAP_VERSION:-"^2.0.0"}
export GULP_MERGE_VERSION=${GULP_MERGE_VERSION:-"^0.1.1"}


# npm install --save-dev --save-exact prettier
export PRETTIER_IO_VERSION=${PRETTIER_IO_VERSION:-"^2.5.1"}
export GULP_PRETTIER_VERSION=${GULP_PRETTIER_VERSION:-"^4.0.0"}
export GULP_CLEAN_VERSION=${GULP_CLEAN_VERSION:-"^0.4.0"}

# ${GULP_NODE_SASS_VERSION}

# ${GULP_VERSION}

# ${GULP_PURGECSS_VERSION}

# ${GULP_SASS_VERSION}

# ${GULP_BEAUTIFY_VERSION}

# ${GULP_SEO_VERSION}

# ${GULP_UTIL_VERSION}

# ${GULP_DEST_CLEAN_VERSION}

# ${GULP_BROWSER_SYNC_VERSION}


# # npm i --save-dev \
# #      node-sass@${GULP_NODE_SASS_VERSION} \
# #      gulp@${GULP_VERSION} \
# #      gulp-purgecss@${GULP_PURGECSS_VERSION} \
# #      gulp-sass@${GULP_SASS_VERSION} \
# #      gulp-beautify@${GULP_BEAUTIFY_VERSION} \
# #      gulp-seo@${GULP_SEO_VERSION} \
# #      gulp-util@${GULP_UTIL_VERSION} \
# #      gulp-dest-clean@${GULP_DEST_CLEAN_VERSION} \
# #      browser-sync@${GULP_BROWSER_SYNC_VERSION} \
npm uninstall --save-dev \
    node-sass \
    gulp \
    gulp-purgecss \
    gulp-sass \
    gulp-beautify \
    gulp-seo \
    gulp-util \
    gulp-dest-clean \
    gulp-debug \
    browser-sync \
    gulp-debug \
    gulp-newer \
    gulp-imagemin \
    imagemin-pngquant \
    gulp-minify \
    gulp-uglify \
    readable-stream \
    gulp-sourcemaps \
    gulp-autoprefixer \
    gulp-rename \
    dotenv \
    @babel/core \
    @babel/register \
    @babel/preset-env \
    node-fetch \
    gulp-clean-css \
    del \
    gulp-html-replace \
    gulp-find \
    gulp-replace \
    gulp-if \
    gulp-useref \
    @babel/register \
    gulp-tap \
    gulp-merge \
    prettier \
    gulp-prettier \
    gulp-clean

npm i --save-dev \
    node-sass@${GULP_NODE_SASS_VERSION} \
    gulp@${GULP_VERSION} \
    gulp-purgecss@${GULP_PURGECSS_VERSION} \
    gulp-sass@${GULP_SASS_VERSION} \
    gulp-beautify@${GULP_BEAUTIFY_VERSION} \
    gulp-seo@${GULP_SEO_VERSION} \
    gulp-util@${GULP_UTIL_VERSION} \
    gulp-dest-clean@${GULP_DEST_CLEAN_VERSION} \
    browser-sync@${GULP_BROWSER_SYNC_VERSION} \
    gulp-debug@${GULP_DEBUG_VERSION} \
    gulp-newer@${GULP_NEWER_VERSION} \
    gulp-imagemin@${GULP_IMAGEMIN_VERSION} \
    gulp-minify@${GULP_MINIFY_VERSION} \
    gulp-uglify@${GULP_UGLIFY_VERSION} \
    readable-stream@${GULP_READABLE_STREAM_VERSION} \
    gulp-sourcemaps@${GULP_SOURCEMAPS_VERSION} \
    gulp-autoprefixer@${GULP_AUTOPREFIXER_VERSION} \
    gulp-rename@${GULP_RENAME_VERSION} \
    dotenv@${GULP_DOTENV_VERSION} \
    imagemin-pngquant@${GULP_IMAGEMIN_PNGQUANT_VERSION} \
    @babel/core@${GULP_BABEL_CORE_VERSION} \
    @babel/register@${GULP_BABEL_REGISTER_VERSION} \
    @babel/preset-env@${GULP_BABEL_PRESET_ENV_VERSION} \
    node-fetch@${GULP_NODE_FETCH_VERSION} \
    gulp-clean-css@${GULP_CLEAN_CSS_VERSION} \
    del@${GULP_DEL_VERSION} \
    gulp-html-replace@${GULP_HTML_REPLACE_VERSION} \
    gulp-find@${GULP_FIND_VERSION} \
    gulp-replace@${GULP_REPLACE_VERSION} \
    gulp-if@${GULP_IF_VERSION} \
    gulp-useref@${GULP_USEREF_VERSION} \
    @babel/register@${BABEL_REGISTER_VERSION} \
    gulp-tap@${GULP_TAP_VERSION} \
    gulp-merge@${GULP_MERGE_VERSION} \
    prettier@${PRETTIER_IO_VERSION} \
    gulp-prettier@${GULP_PRETTIER_VERSION} \
    gulp-clean@${GULP_CLEAN_VERSION}
