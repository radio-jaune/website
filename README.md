# The Radio Jaune Open Website

This repository version controls the code source the Radio Jaune Website : https://radiojaune.com


## How to build and run locally

### B.O.M.

* [`Hugo`](https://gohugo.io/getting-started/quick-start/#step-1-install-hugo)
* [`NodeJS`](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
* [`Golang`](https://go.dev/doc/install)
*


* On MacOS X :

```bash
bash-3.2$ node -v
v14.15.0
bash-3.2$ npm --version
6.14.8
bash-3.2$ export PATH=$PATH:/usr/local/go/bin
bash-3.2$ go version
 https://vk.com/video_ext.php?oid=698175626&id=456239019&hash=162c1c4e1e027ead

go version go1.16.3 darwin/amd64
bash-3.2$ hugo version
Hugo Static Site Generator v0.78.2-959724F0 darwin/amd64 BuildDate: 2020-11-13T10:07:09Z
bash-3.2$ docker version
Client:
 Cloud integration: 1.0.17
 Version:           20.10.7
 API version:       1.41
 Go version:        go1.16.4
 Git commit:        f0df350
 Built:             Wed Jun  2 11:56:22 2021
 OS/Arch:           darwin/amd64
 Context:           default
 Experimental:      true

Server: Docker Engine - Community
 Engine:
  Version:          20.10.7
  API version:      1.41 (minimum version 1.12)
  Go version:       go1.13.15
  Git commit:       b0f5bc3
  Built:            Wed Jun  2 11:54:58 2021
  OS/Arch:          linux/amd64
  Experimental:     false
 containerd:
  Version:          1.4.6
  GitCommit:        d71fcd7d8303cbf684402823e425e9dd2e99285d
 runc:
  Version:          1.0.0-rc95
  GitCommit:        b9ee9c6314599f1b4a7f497e1f1f856fe433d3b7
 docker-init:
  Version:          0.19.0
  GitCommit:        de40ad0
bash-3.2$ docker-compose version
Docker Compose version 2.2.3
bash-3.2$ git version
git version 2.24.3 (Apple Git-128)
bash-3.2$ git flow version
1.12.3 (AVH Edition)
```

### Build n Run Locally

* Now build the hugo website in dev mode :

```bash
export DESIRED_VERSION=0.0.0
cd ~/yellowradio.work
git clone git@github.com:radio-jaune/website.git ~/yellowradio.work

git checkout ${DESIRED_VERSION}

npm run preps:all
# npm run spawn
# and then run :

export PATH=$PATH:/usr/local/go/bin && go version
hugo serve -b http://127.0.0.1:4545 -p 4545 --bind 127.0.0.1 -w

# try also :
export PATH=$PATH:/usr/local/go/bin
export HUGO_HOST=127.0.0.1
export HUGO_PORT=4547
export HUGO_BASE_URL=http://127.0.0.1:5445
export HUGO_BASE_URL=http://${HUGO_HOST}:${HUGO_PORT}
gulp build:dev
```

* Then start the hugo server in watch mode :

```bash
export DESIRED_VERSION=0.0.0
git clone git@github.com:radio-jaune/website.git ~/yellowradio.work
cd ~/yellowradio.work

git checkout ${DESIRED_VERSION}

npm run preps:all
# npm run spawn
# and then run :

export PATH=$PATH:/usr/local/go/bin && go version
hugo serve -b http://127.0.0.1:4545 -p 4545 --bind 127.0.0.1 -w

##
export PATH=$PATH:/usr/local/go/bin
export HUGO_HOST=127.0.0.1
export HUGO_PORT=4547
export HUGO_BASE_URL=http://127.0.0.1:5445
export HUGO_BASE_URL=http://${HUGO_HOST}:${HUGO_PORT}

# gulp hugo will only build the hugo website, it won't compile sass scss
gulp watch:dev

```

* production build :

```bash
##
export PATH=$PATH:/usr/local/go/bin
export HUGO_HOST=127.0.0.1
export HUGO_PORT=4547
export HUGO_BASE_URL=http://127.0.0.1:5445
export HUGO_BASE_URL=http://${HUGO_HOST}:${HUGO_PORT}

gulp build:prod

```


## How to re-generate this project

To see how this website looked when it started, and was automatically generated :

* Execute :

```bash
export DESIRED_VERSION=master
git clone git@github.com:radio-jaune/website.git ~/yellowradio.work
cd ~/yellowradio.work
git checkout ${DESIRED_VERSION}

npm preps:all
npm run spawn:project:clean && npm run spawn:project:gen

spawn:project:clean
spawn:project:gen
```

* Then run locally your new website :

```bash
export PATH=$PATH:/usr/local/go/bin
hugo serve -b http://127.0.0.1:5445 -p 5445 --bind 127.0.0.1 -w

# or try :
export PATH=$PATH:/usr/local/go/bin
export HUGO_HOST=127.0.0.1
export HUGO_PORT=4547
export HUGO_BASE_URL=http://127.0.0.1:5445
export HUGO_BASE_URL=http://${HUGO_HOST}:${HUGO_PORT}

gulp hugo
gulp serve
```


## How to release

* Release :

```bash
git clone git@github.com:radio-jaune/website.git ~/yellowradio.release.work
cd ~/yellowradio.release.work
git checkout master
git flow init --defaults

npm run preps

export RELEASE_VERSION=0.0.66
export DEPLOYMENT_DOMAIN=radiojaune.com
export DEPLOYMENT_BASE_URL=https://${DEPLOYMENT_DOMAIN}

git flow release start ${RELEASE_VERSION}



if [ -d ./docs ]; then
  rm -fr ./docs
fi;

if [ -d ./public ]; then
  rm -fr ./public
fi;

mkdir -p  ./docs
mkdir -p  ./public

oldHugoBuild () {
  export PATH=$PATH:/usr/local/go/bin
  hugo -b ${DEPLOYMENT_BASE_URL}
  cp -fr ./public/* ./docs/
}
gulpBuild (){
  export PATH=$PATH:/usr/local/go/bin
  export HUGO_HOST=${DEPLOYMENT_DOMAIN}
  export HUGO_PORT=4547
  export HUGO_BASE_URL=http://127.0.0.1:5445
  export HUGO_BASE_URL=http://${HUGO_HOST}:${HUGO_PORT}
  export HUGO_BASE_URL=https://radiojaune.com

  gulp hugo
  cp -fr ./public/* ./docs/
}

oldHugoBuild

cp -fr ./public/* ./docs/

echo "${DEPLOYMENT_DOMAIN}" > CNAME
echo "${DEPLOYMENT_DOMAIN}" > ./docs/CNAME

git add -A && git commit -m "[${RELEASE_VERSION}] - release and deployment" && git push -u origin HEAD

# git flow release finish ${RELEASE_VERSION} && git push -u origin --all  && git push -u origin --tags
git flow release finish -s ${RELEASE_VERSION} && git push -u origin --all  && git push -u origin --tags

```

## Contributors guide

#### Debug the build

* Now build the hugo website in dev mode :

```bash
export DESIRED_VERSION=0.0.0
export DESIRED_VERSION=feature/superbeau-bouton

cd ~/yellowradio.work
git clone git@github.com:radio-jaune/website.git ~/yellowradio.work

git checkout ${DESIRED_VERSION}

npm run preps:all
# npm run spawn
# and then run :

# export PATH=$PATH:/usr/local/go/bin && go version
# hugo serve -b http://127.0.0.1:4545 -p 4545 --bind 127.0.0.1 -w

# try also :
export PATH=$PATH:/usr/local/go/bin
export HUGO_HOST=127.0.0.1
export HUGO_PORT=4547
export HUGO_BASE_URL=http://127.0.0.1:5445
export HUGO_BASE_URL=http://${HUGO_HOST}:${HUGO_PORT}
gulp build:debug
serve dist/ -l tcp://${HUGO_HOST}:${HUGO_PORT}
```

#### How to deploy PR branches with surge


```bash

export DEPLOYMENT_DOMAIN=raadio-jaune.surge.sh
export DEPLOYMENT_BASE_URL=https://${DEPLOYMENT_DOMAIN}

if [ -d ./docs ]; then
  rm -fr ./docs
fi;

if [ -d ./public ]; then
  rm -fr ./public
fi;

mkdir -p  ./docs
mkdir -p  ./public

oldHugoBuildNdeploy () {
  export PATH=$PATH:/usr/local/go/bin
  hugo -b ${DEPLOYMENT_BASE_URL}

  cp -fr ./public/* ./docs/
  surge ./public "${DEPLOYMENT_DOMAIN}"
}
gulpBuildNdeploy (){
  export PATH=$PATH:/usr/local/go/bin
  export HUGO_HOST=127.0.0.1
  export HUGO_PORT=4547
  export HUGO_BASE_URL=http://127.0.0.1:5445
  export HUGO_BASE_URL=http://${HUGO_HOST}:${HUGO_PORT}
  export HUGO_BASE_URL=https://${DEPLOYMENT_DOMAIN}
  gulp build:debug:dev
  surge ./dist "${DEPLOYMENT_DOMAIN}"
}

# oldHugoBuildNdeploy
gulpBuildNdeploy

```


#### Gitpod

We recommend to use Gitpod with IDE-integrated `nodejs` inspector client, with intention to debug the `gulp` build. The original issue was about having "glob errors" invoking 'gulp.src' (those errors seem to be very classic).

* https://radiojaune-website-2uvlb4xiykz.ws-eu33.gitpod.io/

* `.gitpod.yml` :
  * use it to
  * use it to
  * content :

```Yaml
# - .gitpod.yml

```



## Env


```bash
export HUGO_BASE_URL=https://127.0.0.1:5447
gulp hugo

```

## An idea about hot reloading

You know, whether i use BrowserSync or NodeMon, here is the "watch" configuration is 90% of the time want :
* I specify one folder like `./dist/`, and :
  * all files out of that folder are watched
  * all files within that folder are not watched,
  * that folder is served statically,
  * everytime any watched file is changed, the incremental build is relaunched from start, and server triggers page reload (jsut lke hugo dev server)
* So Ok I will try gulp-nodemon instead of BrowserSync, to compare and see if i have better

My first Gulp build has a design that satifies me, but not...


This task is about adding gulp tasks to :
* keep the original image file
* generate 3 to 5 resizing images file for responsiveness
* and since when you do that kind of processing, you end up with a lot of images :
  * you just keep the original image file in the source code, zero processed files should be in the git repo
  * you publish the images to a CDN
  * cloud service providers  :
    * the production and staging environments will use a managed CDN for images
    * and the development environment will use a CDN that is open source, provisioned in private infrastructure (with an open source private cloud provider like pokusbox), and broadcasted via noip ..?

* [ ] add gulp tasks to process images :
  * purpose 1 : add effects on images using ImageMagick :
    * There is no gulp-imagemagick plugin,
    * There are plugins using ImageMagick features to resize images for example,
    * but  A./ I want to use ImageMagick special effects commands, not resizing commands
    * and B./ I want a plugin which allows me to run any ImageMagick commands, not only resizing  commands
    * so i will use child_process and shelljs to run imagemagick commands
  * purpose 2 : For each image file, generate 3 to 5 resized images, using sharp / `gulp-sharp`
  * purpose 3 : compress all images files, will be done using imagemin / `gulp-imagemin`
* [ ] modify npm script to deploy images to CDN. The deployment process becomes :
  * deploy all images to CDN
  * if, and only if, all images were successfully deployed to CDN,
  * then the deployment of the website wan happen (the deployment of the static site to the static web server)
  * This new deployment makes it required that we use a staging environment, to deploy to a different CDN on staging and production envs : indeed, if the image deployement fails, it will then never impact in any way the production environment

### Benchamrk CDN services

Image services like  (open-source) and [Cloudinary](https://cloudinary.com/) are also worth checking out. Image services provide responsive images (and image manipulation) on-demand. Thumbor is setup by installing it on a server; Cloudinary takes care of these details for you and requires no server setup. Both are easy ways to create responsive images.
We need a benchmark there, at least between :
* [Thumbor](https://github.com/thumbor/thumbor)
* [Cloudinary](https://cloudinary.com/)
* cloudflare


### `Gitops` Corner

In my gitops fluxcd work, i want to work on one business case i find here :
* I want to use FluxCD / Flagger and a monitoring stack, to deploy the same website we are talking about here
* And the Monitoring Stack will especially detect an image error, pas it to Flagger to roll back the deployment, to previous version.

### References

* https://github.com/ImageMagick/ImageMagick
* https://github.com/lovell/sharp
* https://www.npmjs.com/package/gulp-beautify
* https://www.npmjs.com/package/gulp-seo
* https://www.npmjs.com/package/gulp-newer
* You are my hero :
  * https://tutorialmeta.com/question/instead-change-the-require-of-index-js-to-a-dynamic-import-which-is-available , for solving my gulp issue qith `gulp-imagemin` npm package
* CDN :
  * https://www.npmjs.com/package/gulp-cloudinary-upload
  * and im sure we have same for cloudflare, and other alternative CDNs.
* images processing : https://www.npmjs.com/package/gulp-sharp
