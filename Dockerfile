FROM node:23

RUN apt-get update && apt-get install -y netcat-openbsd
# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./

RUN npm install

# install typescript
RUN npm install -g typescript
RUN npm install -g ts-node

# Bundle app source
COPY . .
# Copy the init script
COPY init.sh ./init.sh
RUN chmod +x ./init.sh

# Expose the port the app runs on
EXPOSE 3000
# Start the app
CMD [ "npm", "run", "dev" ]