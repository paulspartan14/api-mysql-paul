FROM node:12-alpine3.10

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

# run server
EXPOSE ${PORT}
CMD [ "npm", "start" ]