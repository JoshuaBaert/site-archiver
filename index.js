const scrape = require('website-scraper');
const options = {
    directory: './public',
    recursive: true,
    maxRecursiveDepth: 3,
    subdirectories: [
        {directory: 'img', extensions: ['.jpg', '.png', '.svg', '.gif']},
        {directory: 'js', extensions: ['.js']},
        {directory: 'style', extensions: ['.css', '.eot', '.ttf', '.woff', '.woff2']},
        {directory: 'assets', extensions: ['.pdf']},
        // axd files are really css or js need to be worked out and referenced in html correctly
        {directory: 'needs-attention', extensions: ['.axd']},
    ],
    urlFilter: (url) => url.startsWith('https://mdc.ilmservice.com/'),
    urls: [
        'https://mdc.ilmservice.com/',
    ],
};

scrape(options, (error, result) => {
    if (error) {
        return console.error(error);
    }
    console.log('Finished');
});
