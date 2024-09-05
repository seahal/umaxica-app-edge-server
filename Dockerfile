FROM node:22.6-bookworm-slim AS development
RUN mkdir /remix
WORKDIR /remix
RUN apt-get update -qq && \
    apt-get install -y build-essential curl git bash unzip && \
    apt-get clean && \
    curl -fsSL https://bun.sh/install | bash
