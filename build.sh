#!/bin/bash
# Install dependencies
npm install

# Build the app
npm run build

# Copy the build directory to the output directory
cp -r build/* .
