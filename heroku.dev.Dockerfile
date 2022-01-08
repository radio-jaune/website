# +++ +++ +++ +++ +++ +++ +++ +++ +++ +++ +++ +++ +++ +++ +++ #
# --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- #
# --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- #
# ---               HUGO BASE CONTAINER IMAGE             --- #
# --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- #
# --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- #
# +++ +++ +++ +++ +++ +++ +++ +++ +++ +++ +++ +++ +++ +++ +++ #

ARG ALPINE_OCI_IMAGE_TAG=${ALPINE_OCI_IMAGE_TAG}
ARG GOLANG_VERSION=${GOLANG_VERSION:-1.15.6}
ARG HTTPD_OCI_IMAGE_TAG=${HTTPD_OCI_IMAGE_TAG}
FROM golang:$GOLANG_VERSION-alpine$ALPINE_OCI_IMAGE_TAG AS hugo_build_base
# FROM alpine:${ALPINE_OCI_IMAGE_TAG} AS hugo_build

ARG ALPINE_OCI_IMAGE_TAG=${ALPINE_OCI_IMAGE_TAG:-'latest'}

ARG GOLANG_VERSION=${GOLANG_VERSION}
ARG HUGO_VERSION=${HUGO_VERSION}
ARG HUGO_BASE_URL=${HUGO_BASE_URL}

RUN echo "GOLANG_VERSION=[${GOLANG_VERSION}] and HUGO_VERSION=[${HUGO_VERSION}] and HUGO_BASE_URL=[${HUGO_BASE_URL}]"
USER root
# [build-base] because the hugo installation requires gcc and [build-base] package contains the proper gcc
RUN apk update && apk add curl git tree tar bash build-base
# --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- #
# ---              CHECKING GOLANG VERSION                --- #
# --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- #

RUN export PATH=$PATH:/usr/local/go/bin && go version

# --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- #
# ---                   INSTALLING HUGO                   --- #
# --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- #

COPY heroku.alpine.hugo-extended.setup.sh .
RUN chmod +x ./heroku.alpine.hugo-extended.setup.sh && ./heroku.alpine.hugo-extended.setup.sh
RUN echo "Is Hugo properly installed ?"
RUN export PATH=$PATH:/usr/local/go/bin && hugo version && hugo env

# +++ +++ +++ +++ +++ +++ +++ +++ +++ +++ +++ +++ +++ +++ +++ #
# --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- #
# --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- #
# ---               HUGO BUILD CONTAINER IMAGE            --- #
# --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- #
# --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- #
# +++ +++ +++ +++ +++ +++ +++ +++ +++ +++ +++ +++ +++ +++ +++ #

FROM hugo_build_base AS hugo_build
# FROM alpine:${ALPINE_OCI_IMAGE_TAG} AS hugo_build

# --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- #
# ---                  HUGO BUILD             --- #
# ---         into [/usr/local/apache2/htdocs]            --- #
# --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- #

RUN mkdir -p /pokus.io/hugo/src/
COPY . /pokus.io/hugo/src/
COPY .git /pokus.io/hugo/src/
RUN ls -allh /pokus.io/hugo/src/
RUN export PATH=$PATH:/usr/local/go/bin && cd /pokus.io/hugo/src/ && hugo -b "${HUGO_BASE_URL}"

# +++ +++ +++ +++ +++ +++ +++ +++ +++ +++ +++ +++ +++ +++ +++ #
# --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- #
# --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- #
# ---               PUBLISHED CONTAINER IMAGE             --- #
# --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- #
# --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- #
# +++ +++ +++ +++ +++ +++ +++ +++ +++ +++ +++ +++ +++ +++ +++ #


FROM httpd:${HTTPD_OCI_IMAGE_TAG} AS release

ARG HTTPD_OCI_IMAGE_TAG=${HTTPD_OCI_IMAGE_TAG}
ARG GIT_COMMIT_ID=${GIT_COMMIT_ID}
ARG CICD_BUILD_ID=${CICD_BUILD_ID}

LABEL maintainer="Jean-Baptiste-Laselle <jean.baptiste.lasselle@gmail.com>"
LABEL author="Jean-Baptiste-Laselle <jean.baptiste.lasselle@gmail.com>"
LABEL cicd.build.id="${CICD_BUILD_ID}"
LABEL git.commit.id="${GIT_COMMIT_ID}"
LABEL daymood="https://www.youtube.com/watch?v=v-JsqKlVVGk&list=RDv-JsqKlVVGk"
LABEL oci.image.base="httpd:${HTTPD_OCI_IMAGE_TAG}"

# --- HEROKU ENV.
#
# https://help.heroku.com/PPBPA231/how-do-i-use-the-port-environment-variable-in-container-based-apps
#
# In a word :
# Heroku platfor will assign a value to the PORT variable, and
# do the network setup with reverse proxying. So Basically I just haveto know that
# the PORT environment variable is there where the network will happen, where the network traffic will travel : I can listen on that port if I want, for example
# At any rate, I should NOT EVER
# EXPOSE $PORT

# Okay, so my Apache HTTP Server should listen on port number defined by $PORT
ARG PORT
ENV PORT=$PORT


USER root
RUN mkdir -p /pokus.io
# --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- #
# ---         INSTALLING RESULT OF HUGO BUILD             --- #
# ---         into [/usr/local/apache2/htdocs]            --- #
# --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- #

RUN rm -fr /usr/local/apache2/htdocs
RUN mkdir -p /usr/local/apache2/htdocs
RUN mkdir -p /pokus.io/retrieved_hugo_build
COPY --from=hugo_build /pokus.io/hugo/src/public /pokus.io/retrieved_hugo_build
RUN echo "Right after retrieveing the result of the hugo build , content of  [/pokus.io/retrieved_hugo_build] : "
RUN ls -allh /pokus.io/retrieved_hugo_build
#   fRench do it, Let(')s do it, Let's...
RUN cp -fR /pokus.io/retrieved_hugo_build/* /usr/local/apache2/htdocs

# --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- #
# ---  APACHE CONF FILE AND RUN SCRIPT (with healthcheck) --- #
# --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- #
# This [httpd.conf] is customized with CORS rules
RUN rm -f /usr/local/apache2/conf/httpd.conf
COPY httpd.conf /usr/local/apache2/conf

COPY heroku.apache.start.sh /pokus.io
COPY heroku.container.healthcheck.sh /pokus.io
RUN chmod +x /pokus.io/*.sh

#
# healthcheck:
#   test: ["CMD", "/pokus.io/website.healthcheck.sh"]
#   interval: 5s
#   timeout: 10s
#   retries: 30
#   start_period: 60s
#

ENTRYPOINT ["/pokus.io/heroku.apache.start.sh"]
