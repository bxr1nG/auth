FROM node:lts-alpine

WORKDIR /app

COPY package.json /app

COPY package-lock.json /app

COPY /packages/ui/package.json /app/packages/ui/package.json

COPY /packages/proxy/package.json /app/packages/proxy/package.json

RUN npm ci

COPY . .

RUN npm run dockerfile-build &&\
    rm -rf packages/*/src packages/*/tsconfig.json packages/ui/webpack.*.ts tsconfig.json

EXPOSE 80

ENV NODE_ENV=production

CMD ["node", "packages/proxy/build/index.js"]