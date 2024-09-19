const googleNewsScraper = require('google-news-scraper');
const fs = require('fs');

// Add companies as needed
const companies = [
    "Tesla",
    "Apple",
    "Microsoft",
    "Amazon",
    "Google",
    "Meta",
    "Netflix",
    "NVIDIA",
    "Salesforce",
    "IBM"
];

(async () => {
    try {
        for (const company of companies) {
            const config = {
                searchTerm: company,
                prettyURLs: true,
                timeframe: '1y',           // Articles from the past 1 year
                getArticleContent: false
            };

            const articles = await googleNewsScraper(config);
            console.log(`Fetched ${articles.length} articles for ${company}`);

            const filename = `${company.replace(/\s+/g, '_')}_news.json`;
            fs.writeFileSync(filename, JSON.stringify(articles, null, 2));
            console.log(`News for ${company} saved to ${filename}`);
        }
    } catch (error) {
        console.error('Error:', error);
    }
})();
