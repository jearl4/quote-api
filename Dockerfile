FROM node:17.4 as build

WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build

# smaller second container
FROM node:17.4
WORKDIR /app
COPY package.json .
RUN npm install --only=production
COPY --from=build /app/dist ./dist
EXPOSE 3000
CMD npm run start:prod