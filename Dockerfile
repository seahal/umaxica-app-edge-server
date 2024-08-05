FROM node:22.5-alpine3.20
RUN apk add --no-cache --repository http://dl-cdn.alpinelinux.org/alpine/v3.20/main/
RUN apk update && apk upgrade
RUN apk add --no-cache 'busybox'
# RUN apk --update add tzdata bash && \
#     cp /usr/share/zoneinfo/GMT /etc/localtime && \
#     apk del tzdata && \
#     rm -rf /var/cache/apk/*
RUN mkdir /remix
WORKDIR /remix
ADD package.json /remix/package.json
ADD package-lock.json /remix/package-lock.json
RUN npm install
