FROM node:alpine AS dev
WORKDIR /app
COPY package.json .
RUN npm install
COPY . ./
EXPOSE 5000
CMD ["npm", "run", "dev"]

FROM node:alpine AS prod
WORKDIR /app
COPY package.json .
RUN npm install
COPY . ./
EXPOSE 5000
CMD ["npm", "start"]