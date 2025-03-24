ARG NODE_VERSION=22.6.0

FROM node:$NODE_VERSION-bookworm AS development
ARG COMMIT_HASH
ENV COMMIT_HASH=${COMMIT_HASH}
WORKDIR /main
COPY package*.json ./
RUN npm install