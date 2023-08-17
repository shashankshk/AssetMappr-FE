# Use an official Node.js 
FROM node:14 as package

# Set the working directory 
WORKDIR /app

# Copy package*.json
COPY package*.json ./

# Install project dependencies
RUN npm install

# Stage 2: Build the React Application
FROM package as build

# Defaults to production
ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

# Copy the project
COPY . .

# Build the React application 
RUN npm run build

# Stage 3: Attach nginx
# Nginx server
FROM nginx:alpine

# Copy the build files
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 for the container
EXPOSE 80

# Start NGINX server
CMD ["nginx", "-g", "daemon off;"]