const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const data = require("./data/data.json");

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/chefs", (req, res) => {
  res.send(data);
});

app.get("/chef/:id", (req, res) => {
  const id = req.params.id;
  const selectedChef = data.find((chef) => chef.id == id);
  res.send(selectedChef);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
