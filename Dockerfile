FROM node:lts-alpine

WORKDIR /app

COPY package.json /app

COPY /packages/ui/package.json /app/packages/ui/package.json

COPY /packages/proxy/package.json /app/packages/proxy/package.json

COPY /packages/listener/package.json /app/packages/listener/package.json

RUN npm install

COPY /packages/ui/build /app/packages/ui/build

COPY /packages/proxy/build /app/packages/proxy/build

COPY /packages/listener/build /app/packages/listener/build

EXPOSE 80

CMD ["npm", "run", "start"]