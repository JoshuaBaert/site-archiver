## Archive Script

This uses [website-scraper](https://www.npmjs.com/package/website-scraper) 
to grab the website and add it to the /public folder. You will need to 
host its locally with a simple http server to ensure everything is working

Umbraco uses source files of .axd that are something else like .css
or .js. You will need to figure this out rename the files and fix reference

### Steps

* `npm install`
* `npm start`
* host `./public` with http server
* Make any changes needed to ensure its working (.axd fix)
* Copy public to web project 
* Rename to year
* Add to `web.config`
