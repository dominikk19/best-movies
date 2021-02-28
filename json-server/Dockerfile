#FROM node:latest
#RUN npm install -g json-server
#WORKDIR /data
#VOLUME /data
#EXPOSE 3000
#COPY run.sh ./
#ENTRYPOINT ["json-server"]
#CMD []


FROM alpine
WORKDIR /data
VOLUME /data
RUN set -xe \
    && apk add --no-cache nodejs nodejs-npm \
    && npm install -g json-server \
    && rm -rf /tmp/npm* /var/cache/apk/*

EXPOSE 3000
ENTRYPOINT ["json-server"]
CMD ["--help"]
