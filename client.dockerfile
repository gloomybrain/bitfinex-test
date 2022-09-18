FROM node:18-alpine

WORKDIR /app

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN ["npm", "install"]

COPY index.js index.js
COPY register-limit.js register-limit.js

ENV DEBUG="*"
CMD ["node", "index.js"]
