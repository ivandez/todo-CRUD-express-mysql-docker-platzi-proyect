FROM node:20.11.1

COPY ["package.json", "/usr/src/"]

WORKDIR /usr/src/src

RUN npm install -g pnpm

RUN pnpm install

COPY ["src/", "/usr/src/"]

EXPOSE 3000

CMD ["node", "--watch", "index.js"]
