FROM node:24-alpine

WORKDIR /app

# Copy package files first for better caching
COPY src/nuxt/package.json ./

# Install dependencies
RUN npm install 

# Copy source code
COPY ./src/nuxt ./

# Build the app.
RUN npm run build

# Copy files to the container image.
COPY --from=build /app ./

# EXPOSE 8080
# Serve the app
CMD ["npm", "run", "start"]
