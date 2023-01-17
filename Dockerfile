FROM node:lts-alpine

WORKDIR /app

COPY package.json /app

COPY /packages/ui/package.json /app/packages/ui/package.json

COPY /packages/proxy/package.json /app/packages/proxy/package.json

COPY /packages/listener/package.json /app/packages/listener/package.json

RUN npm install

COPY . .

RUN npm run build &&\
    rm -rf packages/*/src packages/*/tsconfig.json packages/ui/webpack.*.ts tsconfig.json

EXPOSE 80

CMD ["npm", "run", "start"]