# build project at first
FROM node:12 as build-stage
WORKDIR /app

COPY package*.json /app/
RUN npm install

COPY ./ /app/
RUN npm run build

# second stage to copy only build app and use only nginx for app
FROM nginx:1.15

COPY --from=build-stage /app/build/ /usr/share/nginx/html

# Copy the default nginx.conf provided by tiangolo/node-frontend
COPY  ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 6783