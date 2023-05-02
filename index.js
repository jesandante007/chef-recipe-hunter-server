const express = require("express");
const cors = require("cors")
const app = express();
const port = process.env.PORT || 5000;
const data = require("./data/data.json");

app.use(cors())

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
