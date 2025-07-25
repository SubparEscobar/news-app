# NewsHub - Professional News Website

A beautiful, responsive news website built with modern web technologies.

## ✅ **Current Status: WORKING**

The website is now fully functional with:
- ✅ Professional UI with beautiful styling
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ 6 sample news articles with images
- ✅ Interactive features and animations
- ✅ Stable backend and frontend servers

## 🚀 **Quick Start**

### **Option 1: Use the Batch File (Windows)**
1. Double-click `start-website.bat`
2. Two command windows will open automatically
3. Your browser will open to the website

### **Option 2: Manual Start**
1. **Start Backend Server:**
   ```bash
   cd news-proxy-server
   node server.js
   ```

2. **Start Frontend Server (in a new terminal):**
   ```bash
   cd frontend
   live-server --port=8080 --open=/index.html
   ```

## 🌐 **Access Your Website**

- **Frontend**: http://localhost:8080
- **Backend API**: http://localhost:3000/api/news

## 📰 **Features**

### **Professional Design:**
- Clean, modern interface with NewsHub branding
- Responsive grid layout for news articles
- Beautiful hover effects and smooth animations
- Professional color scheme and typography

### **Interactive Elements:**
- Sticky navigation with category links
- Mobile hamburger menu
- Refresh button to reload news
- Loading states and error handling
- Click animations on news cards

### **News Articles:**
- 6 high-quality sample articles covering:
  - AI Technology breakthrough
  - Global market recovery
  - Sports championship records
  - Climate study findings
  - Medical research breakthrough
  - Entertainment news

### **Technical Features:**
- Fallback mock data (no API key required)
- Responsive design for all devices
- Modern CSS with animations
- Error handling and loading states

## 🛠️ **Technology Stack**

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Backend**: Node.js, Express.js
- **Styling**: Custom CSS with responsive design
- **Icons**: Font Awesome
- **Fonts**: Inter (Google Fonts)

## 📁 **Project Structure**

```
news-app/
├── frontend/
│   ├── index.html          # Main HTML file
│   ├── output.css          # Compiled CSS styles
│   ├── scripts.js          # JavaScript functionality
│   └── package.json        # Frontend dependencies
├── news-proxy-server/
│   ├── server.js           # Express.js backend server
│   ├── .env                # Environment variables
│   └── package.json        # Backend dependencies
├── start-website.bat       # Windows startup script
└── README.md              # This file
```

## 🔧 **Troubleshooting**

### **If the website looks unstyled:**
- Make sure both servers are running
- Check that `output.css` is accessible at http://localhost:8080/output.css
- Try refreshing the browser

### **If news doesn't load:**
- Check that the backend server is running on port 3000
- Test the API: http://localhost:3000/api/news
- Check browser console for errors

### **If servers won't start:**
- Make sure you're in the correct directory
- Check that Node.js is installed
- Run `npm install` in both frontend and news-proxy-server directories

## 🎨 **Customization**

### **To add real news data:**
1. Get a free API key from [NewsAPI.org](https://newsapi.org/)
2. Update `news-proxy-server/.env` with your API key
3. Uncomment the API code in `server.js`

### **To modify styling:**
- Edit `frontend/output.css` for immediate changes
- Or use `frontend/input.css` and rebuild with Tailwind

## 📱 **Responsive Design**

The website is fully responsive:
- **Mobile**: Single column layout
- **Tablet**: Two column layout
- **Desktop**: Three column layout

## 🚀 **Deployment Ready**

This project is ready for deployment to:
- Netlify (frontend)
- Heroku (backend)
- Vercel (full-stack)
- Any static hosting service

---

**Created by Aaron Escobar** | **Powered by NewsAPI.org** 