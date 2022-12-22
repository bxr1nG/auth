FROM node:lts-alpine

WORKDIR /app

COPY package.json /app

COPY /packages/ui/package.json /app/packages/ui/package.json

COPY /packages/proxy/package.json /app/packages/proxy/package.json

COPY /packages/listener/package.json /app/packages/listener/package.json

RUN npm install

COPY . .

RUN npm run build && \
    find ./packages/ui ! \( -name "build" -or -name "node_modules" -or -name "package.json" \) -delete && \
    find ./packages/proxy ! \( -name "build" -or -name "node_modules" -or -name "package.json" \) -delete && \
    find ./packages/listener ! \( -name "build" -or -name "node_modules" -or -name "package.json" \) -delete && \
    find ./ -name "tsconfig.json" -maxdepth 1 -delete

EXPOSE 80

CMD ["npm", "run", "start"]