# Use a lightweight Node.js image
FROM node:20.9.0-bullseye-slim

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the source code
COPY ./src ./src
COPY .env .env

# Expose the application port
EXPOSE 3001

# Command to run the application
CMD ["npm", "run", "start:dev"]
