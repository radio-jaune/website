# RELEASE_NAME

## What's in this release

* Release Version number : `0.0.2`
* Build Datetime : `DATE - TIME`
* **CI/CD** System : `Circle CI`
<!-- * **CI/CD** System : `Drone CI` -->
* `GIT COMMIT ID` : `GIT_COMMIT_ID`

### Features

* social buttons
* menu rearragement
* added more slides

### Bugfix

none

### Miscellaneous

> anything else to mention about the release

## How to build and run locally

* Then start the hugo server in watch mode :

```bash
export DESIRED_VERSION=0.0.0
git clone git@github.com:radio-jaune/website.git.git ~/yellowradio.work
cd ~/yellowradio.work

git checkout ${DESIRED_VERSION}

npm i
# npm run spawn
# and then run :

export PATH=$PATH:/usr/local/go/bin && go version
hugo serve -b http://127.0.0.1:4545 -p 4545 --bind 127.0.0.1 -w

```


* Then start the hugo server in watch mode :

```bash
export DESIRED_VERSION=0.0.0
git clone git@github.com:radio-jaune/website.git.git ~/yellowradio.work
cd ~/yellowradio.work

git checkout ${DESIRED_VERSION}

npm i
# npm run spawn
# and then run :

export PATH=$PATH:/usr/local/go/bin && go version
hugo serve -b http://127.0.0.1:4545 -p 4545 --bind 127.0.0.1 -w

```

## How to re-generate this project

To see how this website looked when it started, and was automatically generated :

* Execute :

```bash
export DESIRED_VERSION=master
git clone git@github.com:radio-jaune/website.git.git ~/yellowradio.work
cd ~/yellowradio.work
git checkout ${DESIRED_VERSION}

npm i
npm run clean && npm run spawn
```

* Then run locally your new website :

```bash
export PATH=$PATH:/usr/local/go/bin
hugo serve -b http://127.0.0.1:5445 -p 5445 --bind 127.0.0.1 -w
```



<!-- # RELEASE_NAME

## What's in this release

* Release Version number : `0.0.0`
* Build Datetime : `DATE - TIME`
* **CI/CD** System : `Circle CI`
* `GIT COMMIT ID` : `GIT_COMMIT_ID`

### Features

* feature1
* feature2
* feature3


### Bugfix

* feature1
* feature2
* feature3

### Miscellaneous

> anything else to mention about the release

## How to build and run locally

* Then start the hugo server in watch mode :

```bash
export DESIRED_VERSION=0.0.0
git clone git@github.com:radio-jaune/website.git.git ~/yellowradio.work
cd ~/yellowradio.work

git checkout ${DESIRED_VERSION}

npm i
# npm run spawn
# and then run :

export PATH=$PATH:/usr/local/go/bin && go version
hugo serve -b http://127.0.0.1:4545 -p 4545 --bind 127.0.0.1 -w

```


* Then start the hugo server in watch mode :

```bash
export DESIRED_VERSION=0.0.0
git clone git@github.com:radio-jaune/website.git.git ~/yellowradio.work
cd ~/yellowradio.work

git checkout ${DESIRED_VERSION}

npm i
# npm run spawn
# and then run :

export PATH=$PATH:/usr/local/go/bin && go version
hugo serve -b http://127.0.0.1:4545 -p 4545 --bind 127.0.0.1 -w

```

## How to re-generate this project

To see how this website looked when it started, and was automatically generated :

* Execute :

```bash
export DESIRED_VERSION=master
git clone git@github.com:radio-jaune/website.git.git ~/yellowradio.work
cd ~/yellowradio.work
git checkout ${DESIRED_VERSION}

npm i
npm run clean && npm run spawn
```

* Then run locally your new website :

```bash
export PATH=$PATH:/usr/local/go/bin
hugo serve -b http://127.0.0.1:5445 -p 5445 --bind 127.0.0.1 -w
```

-->
