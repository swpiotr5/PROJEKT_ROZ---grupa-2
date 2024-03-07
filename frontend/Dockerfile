FROM node:14 as build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

RUN mkdir public

COPY . .

RUN npm run build
