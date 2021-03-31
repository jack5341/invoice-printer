FROM node:14/alphine
WORKDIR /src/app
COPY . /src/app
RUN npm install
CMD ["npm", "start"]