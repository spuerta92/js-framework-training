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

# Navigate to project directory or clone repo if it doesn't exist
PROJECT_DIR="js-framework-training"
PROJECT_PATH="VUE/iam-project-vue"
REPO_URL="https://github.com/spuerta92/js-framework-training.git"
BRANCH="vue-workspace"

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
echo "Starting the Vue.js application..."
setsid nohup serve -s dist -n &> serve.log &