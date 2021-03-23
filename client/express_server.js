const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080; // default port 8080
const request = require ('request');
const cheerio = require('cheerio');
const earthToMars = require('./public/logic/solarGrab')


app.set("view engine", "ejs")

// app.use(earthToMars);

app.use('/public', express.static('public'));

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

/// Fly Route
app.get("/fly", (req, res) => {
  res.render("fly");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});