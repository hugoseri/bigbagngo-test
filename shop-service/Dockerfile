# Build shop-service project
FROM node as build-deps
WORKDIR /usr/src/app
COPY . ./
RUN yarn
RUN yarn build

# move build to new container
FROM node:12-alpine
WORKDIR /usr/src/app
COPY --from=build-deps /usr/src/app/dist .
COPY package.json ./package.json
COPY ormconfig.json ./ormconfig.json
COPY wait-for-it.sh ./wait-for-it.sh

RUN yarn
RUN apk add --no-cache bash
RUN ["chmod", "+x", "/usr/src/app/wait-for-it.sh"]

EXPOSE 3000