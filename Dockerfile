# Build
FROM node:current-slim as build
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
ARG REACT_APP_BACKEND_HOST=localhost
ARG REACT_APP_BACKEND_PORT=8080
ARG REACT_APP_BACKEND_PATH_PREFIX=
ENV REACT_APP_BACKEND_HOST=$REACT_APP_BACKEND_HOST
ENV REACT_APP_BACKEND_PORT=$REACT_APP_BACKEND_PORT
ENV REACT_APP_BACKEND_PATH_PREFIX=$REACT_APP_BACKEND_PATH_PREFIX
RUN npm run build

FROM nginx
EXPOSE 8081
COPY ./default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html
CMD [ "nginx", "-g", "daemon off;" ]