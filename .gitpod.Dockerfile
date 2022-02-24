FROM gitpod/workspace-full:latest

RUN bash -c 'VERSION="14.8.0"     && source /home/jibl/.nvm/nvm.sh && nvm install      && nvm use  && nvm alias default '

RUN echo "nvm use default &>/dev/null" >> ~/.bashrc.d/51-nvm-fix
