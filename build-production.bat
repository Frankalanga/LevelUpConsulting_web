@echo off
chcp 65001 >nul
echo 🚀 Building LevelUp Consulting Website for Production...

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed. Please install Node.js 18+ first.
    pause
    exit /b 1
)

echo ✅ Node.js version: 
node --version

REM Clean previous build
echo 🧹 Cleaning previous build...
if exist build rmdir /s /q build
if exist node_modules rmdir /s /q node_modules

REM Install dependencies
echo 📦 Installing dependencies...
call npm install
if %errorlevel% neq 0 (
    echo ❌ Failed to install dependencies
    pause
    exit /b 1
)

echo ✅ Dependencies installed successfully

REM Build React app
echo 🔨 Building React app...
call npm run build
if %errorlevel% neq 0 (
    echo ❌ Build failed
    pause
    exit /b 1
)

echo ✅ React app built successfully

REM Check if build folder exists
if not exist build (
    echo ❌ Build folder not found
    pause
    exit /b 1
)

echo ✅ Build folder created

REM Test production build locally
echo 🧪 Testing production build locally...

REM Set production environment
set NODE_ENV=production

REM Start server
echo 🚀 Starting production server...
echo 📋 Server will start on port 5001
echo 🌐 Open http://localhost:5001 in your browser
echo 📱 Test all pages and functionality
echo 📧 Verify contact form works
echo.
echo Press Ctrl+C to stop the server
echo.

call npm run server

pause 