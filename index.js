const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home.ejs");
});

let port = 35000;
app.listen(port, () => {
  console.log(`Server is running ar port no ${port}`);
});
