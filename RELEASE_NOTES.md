# RELEASE_NAME

## What's in this release

* Release Version number : `X.Y.Z`
* Build Datetime : `DATE - TIME`
* **CI/CD** System : `Circle CI`
<!-- * **CI/CD** System : `Circle CI` -->
* `GIT COMMIT ID` : `GIT_COMMIT_ID`

### Features

* feature1
* feature2
* feature3


### Bugfix

* feature1
* feature2
* feature3

### MIscellaneous

> anything else to mention about the release

## How to build an run locally

* Then start the hugo server in watch mode :

```bash
export DESIRED_VERSION=master
git clone git@github.com:radiojaune/Documentation.git ~/docto-doc-work
cd ~/docto-doc-work

git checkout ${DESIRED_VERSION}

npm i
# npm run spawn
# and then run :

export HUGO_SERVICES_INSTAGRAM_ACCESSTOKEN=BGvuInzyFAe
export PATH=$PATH:/usr/local/go/bin && go version
hugo serve -b http://127.0.0.1:4545 -p 4545 --bind 127.0.0.1 -w

```


* Then start the hugo server in watch mode :

```bash
export DESIRED_VERSION=master
git clone git@github.com:radiojaune/Documentation.git ~/docto-doc-work
cd ~/docto-doc-work

git checkout ${DESIRED_VERSION}

npm i
# npm run spawn
# and then run :

export HUGO_SERVICES_INSTAGRAM_ACCESSTOKEN=BGvuInzyFAe
export PATH=$PATH:/usr/local/go/bin && go version
hugo serve -b http://127.0.0.1:4545 -p 4545 --bind 127.0.0.1 -w

```
