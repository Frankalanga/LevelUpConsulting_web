#!/bin/bash

echo "🚀 Building LevelUp Consulting Website for Production..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo -e "${RED}❌ Node.js is not installed. Please install Node.js 18+ first.${NC}"
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo -e "${RED}❌ Node.js version 18+ is required. Current version: $(node -v)${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Node.js version: $(node -v)${NC}"

# Clean previous build
echo "🧹 Cleaning previous build..."
rm -rf build/
rm -rf node_modules/

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Failed to install dependencies${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Dependencies installed successfully${NC}"

# Build React app
echo "🔨 Building React app..."
npm run build

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Build failed${NC}"
    exit 1
fi

echo -e "${GREEN}✅ React app built successfully${NC}"

# Check if build folder exists
if [ ! -d "build" ]; then
    echo -e "${RED}❌ Build folder not found${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Build folder created: $(ls -la build/ | head -1)${NC}"

# Test production build locally
echo "🧪 Testing production build locally..."

# Set production environment
export NODE_ENV=production

# Start server in background
echo "🚀 Starting production server..."
npm run server &
SERVER_PID=$!

# Wait for server to start
sleep 5

# Check if server is running
if curl -s http://localhost:5001/api/health > /dev/null; then
    echo -e "${GREEN}✅ Server is running on port 5001${NC}"
    echo -e "${GREEN}✅ Health check passed${NC}"
    
    # Test contact endpoint
    echo "📧 Testing contact endpoint..."
    if curl -s -X POST http://localhost:5001/api/contact \
        -H "Content-Type: application/json" \
        -d '{"name":"Test","email":"test@example.com","message":"Test"}' | grep -q "Email sent successfully"; then
        echo -e "${GREEN}✅ Contact endpoint working${NC}"
    else
        echo -e "${YELLOW}⚠️  Contact endpoint test failed${NC}"
    fi
    
    echo ""
    echo -e "${GREEN}🎉 Production build test successful!${NC}"
    echo "🌐 Open http://localhost:5001 in your browser"
    echo "📱 Test all pages and functionality"
    echo "📧 Verify contact form works"
    echo ""
    echo "Press Ctrl+C to stop the server"
    
    # Wait for user to stop
    wait $SERVER_PID
else
    echo -e "${RED}❌ Server failed to start${NC}"
    kill $SERVER_PID 2>/dev/null
    exit 1
fi 