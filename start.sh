#!/bin/bash

# MusicLens Quick Start Script
echo "🎵 Starting MusicLens App..."

# Check if Node.js is installed
if ! command -v node &> /dev/null
then
    echo "❌ Node.js is not installed. Please install Node.js 14+ first."
    echo "Visit: https://nodejs.org/"
    exit 1
fi

# Check if package.json exists, if not copy from backend-package.json
if [ ! -f "package.json" ]; then
    echo "📦 Copying backend package.json..."
    cp backend-package.json package.json
fi

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📥 Installing dependencies..."
    npm install
fi

# Start the server
echo "🚀 Starting server on http://localhost:3000"
echo "🎯 Open your browser and navigate to the URL above"
echo "📱 The app works best on mobile or in mobile view!"
echo ""
node server.js