#!/bin/bash

# Update system and install necessary packages
sudo yum update -y
sudo yum upgrade -y

# Install git, curl, and Node.js
sudo yum install git curl -y

# Install Node.js if not already installed
if ! command -v node &> /dev/null
then
	curl -sL https://rpm.nodesource.com/setup_18.x | sudo bash -
	sudo yum install -y nodejs
fi

# background job manager (keeps ec2 instance running in the background after closing terminal)
sudo npm install -g pm2

sudo npm install -g http-server

# Navigate to project directory or clone repo if it doesn't exist
PROJECT_DIR="js-framework-training"
PROJECT_PATH="ANGULAR/iam-project-vue"
REPO_URL="https://github.com/spuerta92/js-framework-training.git"
BRANCH="development"

# Check if the project directory exists
if [ ! -d "$PROJECT_DIR" ]; then
    echo "Directory does not exist. Cloning repository..."
    git clone $REPO_URL $PROJECT_DIR
    cd $PROJECT_DIR
    git checkout $BRANCH
else
    echo "Directory exists. Pulling the latest changes..."
    cd $PROJECT_DIR
    git checkout $BRANCH
    git pull origin $BRANCH
fi

# Go to the project directory
cd $PROJECT_PATH

# Install npm dependencies
echo "Installing npm dependencies..."
npm install

# delete existing dist folder
# sudo rm -rf dist

# Build the Vue.js project
echo "Building the project..."
npm run build

# Serve the project on default port 3000 (or another port)
echo "Starting the Angular application..."
pm2 start http-server --name angular-app -- -p 8080 ./dist/<your-app-folder>

# relaunch app after reboot
npm startup
sudo pm2 save