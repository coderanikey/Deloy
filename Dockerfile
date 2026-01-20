FROM node:20-alpine

# Create app directory
WORKDIR /usr/src/app

# Copy package files
COPY package*.json app.js ./

# Install dependencies
RUN npm install --production

# Copy app source
COPY . .

# Expose app port
EXPOSE 80

# Start application
CMD ["node", "app.js"]
