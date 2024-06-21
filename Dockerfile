FROM node:alpine as base

ENV NODE_ENV=production
RUN corepack enable

WORKDIR /app

COPY package.json .
COPY yarn.lock .
COPY .yarn .yarn

RUN yarn install

COPY . .

RUN yarn build

RUN yarn workspaces focus --production

ENV PORT=3000

EXPOSE ${PORT}

CMD ["yarn", "serve"]
