FROM node:18.12 as build

WORKDIR /app

COPY package* .

RUN  npm install

COPY . .

RUN npx nuxt build

FROM node:18.12


WORKDIR /app

COPY --from=build /app/.output .

EXPOSE 3000

CMD ["node", "./app/server/index.mjs"]