FROM node:lts-alpine

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . .

RUN npm run build &&\
    rm -rf src tsconfig.json

EXPOSE 10000

ENV NODE_ENV=production

CMD ["node", "build/index.js"]