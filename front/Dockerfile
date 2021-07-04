# Build front project
FROM node as build-deps
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn
COPY . ./
RUN yarn build

# Serve front project
FROM nginx
COPY nginx.conf /etc/nginx/conf.d/
COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]