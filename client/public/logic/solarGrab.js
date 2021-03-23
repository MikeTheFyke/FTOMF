const request = require ('request');
const cheerio = require('cheerio');

const earthToMars = () => {
request('https://theskylive.com/mars-tracker', (error, response, html) => {
  if (!error && response.statusCode == 200){
    const $ = cheerio.load(html)

    const earthMars = $('#disearth');
    const earthMarsDistance = earthMars.text();
    
    console.log("Earth To Mars : " + earthMarsDistance);
  }
});
}

module.exports = earthToMars;