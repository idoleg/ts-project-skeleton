FROM node:12-alpine

COPY . /app
WORKDIR /app
RUN npm i && npm run build

EXPOSE 8124
CMD node ./dist/bin/server.js
