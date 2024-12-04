# Fetching the latest node image
FROM node:22

# Setting up the work directory
WORKDIR /app

# Installing dependencies
COPY package.json ./

RUN npm install

# Copying all the files in our project
COPY . .

EXPOSE 8084

# Starting our application
CMD ["npm","start"]