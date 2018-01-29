FROM node:8-alpine as builder
WORKDIR /src

COPY package.json .
RUN npm i

COPY . .
RUN npm run build

EXPOSE 4002

CMD ["node", "dist/server.js"]