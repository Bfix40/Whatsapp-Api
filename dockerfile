FROM node:16.13.2

WORKDIR /src/app

COPY package.json .
RUN npm install

COPY . .

EXPOSE 8000
CMD [ "npm", "start" ]