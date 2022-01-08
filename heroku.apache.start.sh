#!/bin/bash

# $$$$$$$$$$$$$$$$$$$$$$$$$$$$
# $$$$$ ----------------------
# APPLY CONFIG TO APACHE SERVER
# $$$$$ ----------------------
# $$$$$$$$$$$$$$$$$$$$$$$$$$$$
#
# https://httpd.apache.org/docs/2.4/vhosts/examples.html
#

export PATH_TO_APACHE_CONFIG_FILE=${PATH_TO_APACHE_CONFIG_FILE:-'/usr/local/apache2/conf/httpd.conf'}
echo " ------------------------------------------------------------------"
echo "  Configuring apache http server to listen on [PORT=$PORT] "
echo "  [PORT=$PORT] is the Network Port assigned by the Heroku Platform"
echo " ------------------------------------------------------------------"
echo " "
ls -allh $PATH_TO_APACHE_CONFIG_FILE
# echo " "
sed -i "s#Listen 80#Listen $PORT#g" $PATH_TO_APACHE_CONFIG_FILE
# echo " "
# echo " ------------------------------------------------------------------"
# echo " content of [$PATH_TO_APACHE_CONFIG_FILE] after resetting Apache http server Listen port number"
# echo " ------------------------------------------------------------------"
# cat $PATH_TO_APACHE_CONFIG_FILE
echo " ------------------------------------------------------------------"
echo " [cat $PATH_TO_APACHE_CONFIG_FILE | grep Listen] gives :  "
echo " ------------------------------------------------------------------"
cat $PATH_TO_APACHE_CONFIG_FILE | grep Listen
echo " ------------------------------------------------------------------"
echo " "
# $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
# THAT'S ALL FOLKS !
# $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
echo " ------------------------------------------------------------------"
echo " Now starting the dreadful Apache!  "
echo " ------------------------------------------------------------------"
echo " "
httpd-foreground
