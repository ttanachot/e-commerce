FROM node:10
RUN apt-get update -qq && apt-get upgrade -y
RUN npm i -g npm
ENV APP_HOME=/usr/src/app
RUN mkdir -p $APP_HOME
WORKDIR $APP_HOME
COPY package.json $APP_HOME
COPY package-lock.json $APP_HOME
RUN npm install
ADD . $APP_HOME

EXPOSE 3000