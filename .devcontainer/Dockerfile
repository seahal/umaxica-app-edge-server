FROM oven/bun:1.1.26-debian AS development
RUN mkdir /remix
WORKDIR /remix
RUN apt-get update -qq && \
    apt-get install -y build-essential curl git bash unzip && \
    apt-get clean
