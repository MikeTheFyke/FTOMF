const express = require("express");
const app = express();
const PORT = 8080; // default port 8080

app.set("view engine", "ejs")
app.use('/public', express.static('public'));

/// Index (Home) Route
app.get("/", (req, res) => {
    res.render("index");
});

/// Index (Home) Route
app.get("/deerhunt", (req, res) => {
  res.render("deerhunt");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});