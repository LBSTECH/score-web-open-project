# Use the official lightweight Node.js image.
FROM node:20-slim

# Create and change to the app directory.
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image.
COPY package*.json ./

# Install dependencies.
RUN npm ci

# Copy local code to the container image.
COPY . ./

# Build TypeScript to JavaScript.
RUN npm run build-ts

# Change to the client directory.
WORKDIR /usr/src/app/dist/client

COPY ./src/client ./
# Install client dependencies and build.
RUN npm ci
RUN npm run build
# Change back to the app directory.
WORKDIR /usr/src/app

# Run the web service on container startup.
ENTRYPOINT ["npm", "run", "start"]
