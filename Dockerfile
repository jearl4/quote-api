FROM node:current-alpine3.14 As development
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --production=false
COPY . .
RUN npm run build

# smaller second container
FROM node:current-alpine3.14 as production
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --only=production
COPY . .
COPY --from=development /usr/src/app/dist ./dist
EXPOSE 3000
CMD ["node", "dist/main"]
