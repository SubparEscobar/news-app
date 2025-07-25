const url = 'http://localhost:3000/api/news';

async function fetchNews() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        displayNews(data.articles);
    } catch (error) {
        console.error('There was an error!', error);
    }
}

fetchNews();

function displayNews(articles) {
    const newsDiv = document.querySelector('#news');
    for (const article of articles) {
        const articleDiv = document.createElement('div');
        articleDiv.style.marginBottom = '20px';

        //create and append a headline to the articleDiv
        const title = document.createElement('h4');
        title.textContent = article.title;

        const description = document.createElement('p');
        description.textContent = article.description;

        const image = document.createElement('img');
        image.src = article.urlToImage;
        image.alt = article.title;
        image.style.maxWidth = '200px';

        const link = document.createElement('a');
        link.href = article.url;
        link.textContent = 'Read more';
        link.target = '_blank';

        articleDiv.appendChild(title);
        articleDiv.appendChild(description);
        articleDiv.appendChild(image);
        articleDiv.appendChild(document.createElement('br'));
        articleDiv.appendChild(link);
  
        newsDiv.appendChild(articleDiv);
    }
}