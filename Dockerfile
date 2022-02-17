# Stage 1: Build
FROM node:14.8.0-stretch as build

RUN mkdir -p /app

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

RUN npm run prod

# Stage 2: Run
FROM nginx:1.17.1-alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
