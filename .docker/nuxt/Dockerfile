FROM node:18.6
WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build
EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]