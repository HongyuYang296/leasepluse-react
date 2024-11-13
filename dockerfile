# Base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install app dependencies by copying package.json and package-lock.json
COPY package.json package-lock.json ./
RUN npm install

# Add app
COPY . ./

# Build the app
RUN npm run build

# Production environment
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
