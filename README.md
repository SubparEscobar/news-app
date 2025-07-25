# News App

A simple news application that displays top headlines using the News API.

## Setup

1. **Get a News API Key:**
   - Go to [NewsAPI.org](https://newsapi.org/)
   - Sign up for a free account
   - Copy your API key

2. **Configure Environment Variables:**
   - Navigate to `news-proxy-server/`
   - Edit the `.env` file and add your API key:
   ```
   PORT=3000
   NEWS_API_KEY=your_actual_api_key_here
   ```

## Running the Application

1. **Install Dependencies:**
   ```bash
   # Install frontend dependencies
   cd frontend
   npm install
   
   # Install server dependencies
   cd ../news-proxy-server
   npm install
   ```

2. **Start the Application:**
   ```bash
   # From the frontend directory
   cd frontend
   npm start
   ```

This will start both the backend server (port 3000) and the frontend development server (port 8080).

## Project Structure

- `frontend/` - React frontend application
- `news-proxy-server/` - Express.js backend server
- The backend acts as a proxy to avoid CORS issues with the News API

## How it Works

1. The frontend runs on `http://localhost:8080`
2. The backend API runs on `http://localhost:3000`
3. The frontend fetches news data from the backend API
4. The backend fetches data from NewsAPI.org and serves it to the frontend 