FROM mhart/alpine-node:10

RUN mkdir /app
WORKDIR /app
COPY . /app

EXPOSE 3000

RUN npm install
