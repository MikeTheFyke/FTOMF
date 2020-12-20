const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080; // default port 8080
const request = require ('request');
const cheerio = require('cheerio');
const earthToMars = require('./public/logic/solarGrab')


app.set("view engine", "ejs")
app.use('/public', express.static('public'));


// request('https://theskylive.com/mars-tracker', (error, response, html) => {
//   if (!error && response.statusCode == 200){
//     const $ = cheerio.load(html)

//     const earthMars = $('#disearth');
//     const earthMarsDistance = earthMars.text();
    
//     console.log("Earth To Mars : " + earthMarsDistance);
//   }
// });

// app.use(earthToMars);

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
  res.render("tunnel");
});

app.get('/api/earthToMars', (req, res) => {
    res.json(earthMarsDistance)
});

/// Solar Route
app.get("/solar", (req, res) => {
  res.render("solar");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});