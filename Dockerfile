FROM node:18.12 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npx nuxt build

FROM node:18.12

WORKDIR /app

COPY --from=build /app/.output ./

EXPOSE 3000

ENV NUXT_HOST=nuxt-app

ENV NUXT_PORT=3000

CMD ["node", "./server/index.mjs"]
