@echo off
REM MusicLens Quick Start Script for Windows

echo 🎵 Starting MusicLens App...

REM Check if Node.js is installed
node --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Node.js is not installed. Please install Node.js 14+ first.
    echo Visit: https://nodejs.org/
    pause
    exit /b 1
)

REM Check if package.json exists, if not copy from backend-package.json
if not exist "package.json" (
    echo 📦 Copying backend package.json...
    copy backend-package.json package.json
)

REM Install dependencies if node_modules doesn't exist
if not exist "node_modules" (
    echo 📥 Installing dependencies...
    npm install
)

REM Start the server
echo 🚀 Starting server on http://localhost:3000
echo 🎯 Open your browser and navigate to the URL above
echo 📱 The app works best on mobile or in mobile view!
echo.
node server.js

pause