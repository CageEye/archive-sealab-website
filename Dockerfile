# Stage 1 - Build Gatsby app
FROM node:11 AS build

RUN npm install --global gatsby

WORKDIR /app
ENV NODE_ENV=production

COPY package.json ./
RUN npm install

COPY . .
RUN gatsby build

# Stage 2 - Final image
FROM nginx:alpine

COPY nginx /etc/nginx/
COPY --from=build --chown=nginx:nginx /app/public /usr/share/nginx/html
RUN touch /var/run/nginx.pid \
    && chown nginx:nginx /var/run/nginx.pid \
    && chown -R nginx:nginx /var/cache/nginx

USER nginx

EXPOSE 8080
HEALTHCHECK CMD [ "wget", "-q", "localhost:8080" ]