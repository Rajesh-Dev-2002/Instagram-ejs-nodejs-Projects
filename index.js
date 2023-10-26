const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/rolldice", (req, res) => {
  let rolldice = Math.floor(Math.random() * 6 + 1);
  res.render("rolldice.ejs", { num: rolldice });
});

app.get("/ig/:username", (req, res) => {
  let {username} = req.params;
  const insta = require("./data.json")
  const data = insta[username]
  res.render("instagram.ejs",{data})
  console.log(data);
});

let port = 35000;
app.listen(port, () => {
  console.log(`Server is running ar port no ${port}`);
});
