FROM node:24-alpine

WORKDIR /app

# Copy package files first for better caching
COPY src/nuxt/package.json ./

# Install dependencies
RUN npm install 

# Copy source code
COPY ./src/nuxt ./

EXPOSE 8080