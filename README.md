# The Radio Jaune Open Website

This repository version controls the code source the Radio Jaune Wbesite : https://radiojaune.com

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


## (DO NOT TRY THAT NOW) How to create a new Hugo project with this theme

* Execute :

```bash
export DESIRED_VERSION=master
git clone git@github.com:radiojaune/Documentation.git ~/docto-doc-work
cd ~/docto-doc-work
git checkout ${DESIRED_VERSION}

npm i
npm run clean && npm run spawn
```

* Then run locally your new website :

```bash
export HUGO_SERVICES_INSTAGRAM_ACCESSTOKEN=BGvuInzyFAe
export PATH=$PATH:/usr/local/go/bin
hugo serve -b http://127.0.0.1:4545 -p 4545 --bind 127.0.0.1 -w
```

## How-to: Add a new bot

Soon to come
