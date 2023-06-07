FROM alpine:3

RUN apk add --update nodejs npm yarn

WORKDIR /usr/src/app

COPY package*.json ./

COPY . .

EXPOSE 7000

RUN yarn

CMD ["yarn", "run","dev"]
