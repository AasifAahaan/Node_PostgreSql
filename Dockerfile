FROM node:20.18.0

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install -g typescript ts-node nodemon

COPY . .

EXPOSE 8080

CMD ["npm", "run", "dev"]
