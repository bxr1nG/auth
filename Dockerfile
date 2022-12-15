FROM node:18.12.1-alpine3.16

WORKDIR /app

COPY package.json /app

COPY /packages/ui/package.json /app/packages/ui/package.json

COPY /packages/proxy/package.json /app/packages/proxy/package.json

COPY /packages/listener/package.json /app/packages/listener/package.json

RUN npm install

COPY . .

EXPOSE 80

CMD ["npm", "run", "start"]