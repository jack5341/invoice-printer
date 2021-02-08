FROM node:14
WORKDIR /src/app
COPY . /src/app
RUN npm install
CMD ["npm", "start"]