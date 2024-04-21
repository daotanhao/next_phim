# Start with the official Node.js image.
FROM node:18

# Set the working directory.
WORKDIR /app

# Add the package.json and install dependencies.
COPY package*.json ./
RUN npm install

# Add the rest of the code.
COPY . .

# Build the project.
RUN npm run build

# Start the application.
CMD [ "npm", "start" ]