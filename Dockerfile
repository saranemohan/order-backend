# Base image with Node.js
FROM node:23.0-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY ./package*.json ./
RUN npm install

# Copy app source code
COPY . .

# Expose the port your app runs on (e.g., 3000)
EXPOSE 6001

# Start the Node.js app
# CMD ["npm", "server"]
CMD ["npm", "run", "server"]
