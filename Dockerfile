# Use an official Node.js image as base
FROM node:12

# Install Python 2
RUN apt-get install -y python && \
    rm -rf /var/lib/apt/lists/*

# Set the working directory
WORKDIR /app

# Copy application files
COPY . .

# Install Node.js dependencies
RUN cd /app && \
  npm install && \
  npm install -g gulp

# Expose port 3000 (or any other ports your application uses)
EXPOSE 3000

# Command to start the application
CMD ["npm", "run", "dev"]