// server.js
import express from 'express';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;
const NEWS_API_KEY = process.env.NEWS_API_KEY;

// Mock news data for when API is unavailable
const mockNewsData = {
  status: "ok",
  totalResults: 10,
  articles: [
    {
      source: { id: "mock-1", name: "Tech News" },
      author: "John Smith",
      title: "Major Breakthrough in AI Technology Announced",
      description: "Scientists have announced a revolutionary breakthrough in artificial intelligence that could transform how we interact with technology.",
      url: "https://example.com/ai-breakthrough",
      urlToImage: "https://via.placeholder.com/400x250/3b82f6/ffffff?text=AI+News",
      publishedAt: "2024-01-15T10:30:00Z",
      content: "The new AI system shows unprecedented capabilities in natural language processing and decision making..."
    },
    {
      source: { id: "mock-2", name: "Business Daily" },
      author: "Sarah Johnson",
      title: "Global Markets Show Strong Recovery Signs",
      description: "Financial markets around the world are showing positive signs of recovery after recent economic challenges.",
      url: "https://example.com/market-recovery",
      urlToImage: "https://via.placeholder.com/400x250/10b981/ffffff?text=Business",
      publishedAt: "2024-01-15T09:15:00Z",
      content: "Analysts are optimistic about the current market trends..."
    },
    {
      source: { id: "mock-3", name: "Sports Central" },
      author: "Mike Wilson",
      title: "Championship Game Sets New Viewership Records",
      description: "The annual championship game has broken all previous viewership records, becoming the most-watched sporting event of the year.",
      url: "https://example.com/championship-records",
      urlToImage: "https://via.placeholder.com/400x250/f59e0b/ffffff?text=Sports",
      publishedAt: "2024-01-15T08:45:00Z",
      content: "Millions of fans tuned in to watch the historic game..."
    },
    {
      source: { id: "mock-4", name: "Science Today" },
      author: "Dr. Emily Chen",
      title: "New Climate Study Reveals Alarming Trends",
      description: "A comprehensive study on climate change has revealed concerning patterns that require immediate global attention.",
      url: "https://example.com/climate-study",
      urlToImage: "https://via.placeholder.com/400x250/06b6d4/ffffff?text=Science",
      publishedAt: "2024-01-15T07:20:00Z",
      content: "The research team analyzed data from over 100 countries..."
    },
    {
      source: { id: "mock-5", name: "Health Weekly" },
      author: "Dr. Robert Davis",
      title: "Breakthrough in Medical Research Announced",
      description: "Medical researchers have announced a significant breakthrough that could lead to new treatments for chronic diseases.",
      url: "https://example.com/medical-breakthrough",
      urlToImage: "https://via.placeholder.com/400x250/ef4444/ffffff?text=Health",
      publishedAt: "2024-01-15T06:10:00Z",
      content: "The new treatment approach shows promising results in clinical trials..."
    },
    {
      source: { id: "mock-6", name: "Entertainment News" },
      author: "Lisa Thompson",
      title: "Award-Winning Film Director Announces New Project",
      description: "The acclaimed director has revealed plans for an ambitious new film project that will begin production next year.",
      url: "https://example.com/director-new-project",
      urlToImage: "https://via.placeholder.com/400x250/8b5cf6/ffffff?text=Entertainment",
      publishedAt: "2024-01-15T05:30:00Z",
      content: "The project is expected to feature an all-star cast..."
    }
  ]
};

app.get('/api/news', async (req, res) => {
  try {
    // Try to fetch from NewsAPI first
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${NEWS_API_KEY}`);
    const data = await response.json();
    
    // Check if the API key is valid
    if (data.status === "error" && data.code === "apiKeyInvalid") {
      console.log("API key invalid, serving mock data");
      res.json(mockNewsData);
    } else if (data.status === "ok") {
      res.json(data);
    } else {
      // If there's any other error, serve mock data
      console.log("API error, serving mock data");
      res.json(mockNewsData);
    }
  } catch (error) {
    console.log("Network error, serving mock data:", error.message);
    res.json(mockNewsData);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`API Key status: ${NEWS_API_KEY ? 'Configured' : 'Missing'}`);
});