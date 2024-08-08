FROM node:22.6-bookworm-slim AS development
RUN mkdir /remix
WORKDIR /remix
ADD package.json /remix/package.json
ADD package-lock.json /remix/package-lock.json
RUN npm install
