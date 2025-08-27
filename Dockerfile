# Use Node.js 18 Alpine for smaller image size
FROM node:18-alpine

# Install necessary build tools
RUN apk add --no-cache python3 make g++

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install ALL dependencies (including dev dependencies needed for build)
RUN npm ci --legacy-peer-deps

# Copy source code
COPY . .

# Build the React app
RUN npm run build

# Remove dev dependencies to reduce image size
RUN npm prune --production

# Expose port (Railway will override this)
EXPOSE 5001

# Start the server (Railway will set PORT environment variable)
CMD ["npm", "run", "server"] 