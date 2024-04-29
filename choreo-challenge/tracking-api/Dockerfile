# Use official Node.js image as base image
FROM node:19.9.0-alpine3.16

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application code
COPY . .

# Expose port 5000
EXPOSE 5000

# Define startup command
CMD ["node", "server-tracking.js"]

