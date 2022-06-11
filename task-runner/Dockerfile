FROM node:18-alpine

WORKDIR /app

RUN npm install --location=global mocha

CMD [ "mocha", "/app/test.js" ]
