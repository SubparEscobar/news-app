const url = 'http://localhost:3000/api/news';

// DOM elements
const newsContainer = document.querySelector('#newsContainer');
const loadingState = document.querySelector('#loadingState');
const errorState = document.querySelector('#errorState');
const lastUpdated = document.querySelector('#lastUpdated');
const refreshBtn = document.querySelector('#refreshBtn');
const retryBtn = document.querySelector('#retryBtn');
const mobileMenuBtn = document.querySelector('#mobileMenuBtn');
const mobileMenu = document.querySelector('#mobileMenu');

// State management
let currentArticles = [];
let isLoading = false;

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    fetchNews();
    setupEventListeners();
    updateLastUpdated();
});

function setupEventListeners() {
    refreshBtn.addEventListener('click', fetchNews);
    retryBtn.addEventListener('click', fetchNews);
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
            mobileMenu.classList.add('hidden');
        }
    });
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('hidden');
}

async function fetchNews() {
    if (isLoading) return;
    
    isLoading = true;
    showLoading();
    hideError();
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        
        if (data.articles && data.articles.length > 0) {
            currentArticles = data.articles;
            displayNews(data.articles);
            updateLastUpdated();
        } else {
            throw new Error('No articles found');
        }
    } catch (error) {
        console.error('There was an error!', error);
        showError();
    } finally {
        isLoading = false;
        hideLoading();
    }
}

function showLoading() {
    loadingState.classList.remove('hidden');
    newsContainer.classList.add('hidden');
}

function hideLoading() {
    loadingState.classList.add('hidden');
    newsContainer.classList.remove('hidden');
}

function showError() {
    errorState.classList.remove('hidden');
    newsContainer.classList.add('hidden');
}

function hideError() {
    errorState.classList.add('hidden');
}

function updateLastUpdated() {
    const now = new Date();
    lastUpdated.textContent = now.toLocaleTimeString();
}

function displayNews(articles) {
    newsContainer.innerHTML = '';
    
    articles.forEach((article, index) => {
        const articleCard = createArticleCard(article, index);
        newsContainer.appendChild(articleCard);
    });
}

function createArticleCard(article, index) {
    const card = document.createElement('div');
    card.className = 'news-card';
    
    // Format the published date
    const publishedDate = article.publishedAt ? new Date(article.publishedAt).toLocaleDateString() : 'Unknown date';
    
    // Create a fallback image if none is provided
    const imageUrl = article.urlToImage || 'https://via.placeholder.com/400x250/3b82f6/ffffff?text=News';
    
    card.innerHTML = `
        <div class="card-image">
            <img src="${imageUrl}" 
                 alt="${article.title || 'News image'}" 
                 onerror="this.src='https://via.placeholder.com/400x250/3b82f6/ffffff?text=News'">
            <div class="source-badge">
                ${article.source?.name || 'News'}
            </div>
            <div class="date-badge">
                ${publishedDate}
            </div>
        </div>
        
        <div class="card-content">
            <h3 class="card-title">
                ${article.title || 'No title available'}
            </h3>
            
            <p class="card-description">
                ${article.description || 'No description available'}
            </p>
            
            <div class="card-footer">
                <div class="author-info">
                    <span class="author-label">By</span>
                    <span class="author-name">
                        ${article.author || 'Unknown Author'}
                    </span>
                </div>
                
                <a href="${article.url}" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   class="btn btn-primary">
                    <i class="fas fa-external-link-alt"></i>
                    Read More
                </a>
            </div>
        </div>
    `;
    
    // Add click animation
    card.addEventListener('click', (e) => {
        if (!e.target.closest('a')) {
            card.style.transform = 'scale(0.98)';
            setTimeout(() => {
                card.style.transform = '';
            }, 150);
        }
    });
    
    return card;
}