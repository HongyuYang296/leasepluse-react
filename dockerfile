# Use the official Node.js 20 image as a base
FROM node:20-alpine AS production

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install all dependencies
RUN npm ci

COPY . .

# Build the application
RUN npm run build

# Expose port
EXPOSE 3000

# Start the app
CMD ["npm", "run", "serve"]
