# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the application code including server.js
COPY . .

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
