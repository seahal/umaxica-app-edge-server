FROM node:22.6.0 AS development
ARG COMMIT_HASH
ENV COMMIT_HASH=${COMMIT_HASH}
WORKDIR /main
COPY package.json package-lock.json /main/
RUN npm install