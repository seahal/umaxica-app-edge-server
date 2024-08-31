FROM node:22.6-bookworm-slim AS development
RUN mkdir /remix
WORKDIR /remix
ADD package.json /remix/package.json
ADD package-lock.json /remix/package-lock.json
RUN apt-get update -qq && \
    apt-get install -y build-essential curl git && \
    apt-get clean
RUN npm install
