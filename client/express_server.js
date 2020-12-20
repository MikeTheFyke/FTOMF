const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080; // default port 8080
const request = require ('request');
const cheerio = require('cheerio');

app.set("view engine", "ejs")
app.use('/public', express.static('public'));


request('https://theskylive.com/mars-tracker', (error, response, html) => {
  if (!error && response.statusCode == 200){
    const $ = cheerio.load(html)

    const earthMars = $('#disearth');
    const earthMarsDistance = earthMars.text();
    console.log("Earth To Mars : " + earthMarsDistance);
  }
});

/// Index (Home) Route
app.get("/", (req, res) => {
    res.render("index");
});

/// Deer Hunter Route
app.get("/deerhunt", (req, res) => {
  res.render("deerhunt");
});

/// Tunnel Route
app.get("/tunnel", (req, res) => {
  // request('https://theskylive.com/how-far-is-mars', (error, response, html) => {
  //   if (!error && response.statusCode == 200){
  //     const $ = cheerio.load(html)

  //     const earthMars = $('.keyinfobox');
  //     const earthMarsDistance = earthMars.find('ar').text();
  //     console.log(earthMarsDistance);
  //   }
  // });

  res.render("tunnel");
});

/// Solar Route
app.get("/solar", (req, res) => {
  res.render("solar");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});