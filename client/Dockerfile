# Dockerfile
 
# Use an existing node alpine image as a base image.
FROM node:20-alpine
 
# Set the working directory.
WORKDIR /app
 
# Copy the package.json file.
COPY package.json yarn.lock .
 
# Install application dependencies.
RUN yarn install
 
# Copy the rest of the application files.
COPY . .
 
# Expose the port.
EXPOSE 3000
 
# Run the application.
CMD ["yarn", "dev"]