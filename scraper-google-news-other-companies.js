const googleNewsScraper = require('google-news-scraper');
const fs = require('fs');

// Add companies as needed
const companies = [
    "Saudi Aramco",
    "AbbVie",
    "Adobe",
    "Broadcom",
    "American Express",
    "Alibaba",
    "Bank of America",
    "Berkshire Hathaway",
    "Caterpillar",
    "Chevron",
    "Comcast",
    "Coca-Cola",
    "Costco",
    "Cisco",
    "Walt Disney",
    "Hermès",
    "Home Depot",
    "Johnson & Johnson",
    "JPMorgan Chase",
    "Eli Lilly",
    "L'Oréal",
    "LVMH",
    "Mastercard",
    "McDonald",
    "Merck",
    "Nestlé",
    "Nike",
    "Novo Nordisk",
    "Oracle",
    "Pfizer",
    "Procter & Gamble",
    "Samsung",
    "Shell",
    "Tencent",
    "Toyota",
    "Tesla",
    "Unilever",
    "UnitedHealth",
    "Visa",
    "Walmart",
    "Intel",
    "Dior"
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
