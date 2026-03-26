FROM node:18-alpine

WORKDIR /app

COPY lab02_jenkins/package*.json ./
RUN npm install

COPY lab02_jenkins/ ./

EXPOSE 3000

CMD ["node", "src/index.js"]