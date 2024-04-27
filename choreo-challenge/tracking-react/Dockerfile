# Use the official Node.js image as the base
FROM node:19.9.0-alpine3.16

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port
EXPOSE 3000

# Command to start the application
CMD ["npm", "start"]
