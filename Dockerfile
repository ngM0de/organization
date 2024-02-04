FROM node:20.11-alpine

COPY . /app/

WORKDIR /app

RUN npm install

ENTRYPOINT ["sh","-c","./start.sh"]
