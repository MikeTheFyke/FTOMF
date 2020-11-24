const express = require("express");
const app = express();
const PORT = 8080; // default port 8080

app.set("view engine", "ejs")
app.use('/public', express.static('public'));

/// Index (Home) Route
app.get("/index", (req, res) => {
    let templateVars = { urls : urlDatabase };
    res.render("index", templateVars);
});


/// Pong Canvas Route
app.get("/pong", (req, res) => {
    res.render("pong");
});

/// Side Scroll Canvas Route
app.get("/sidescroll", (req, res) => {
    res.render("sidescroll");
});

/// Side Scroll Canvas Route
app.get("/froggerP", (req, res) => {
    res.render("froggerP");
});


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});