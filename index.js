const express = require("express");
const bodyParser = require("body-parser");
const { nanoid } = require("nanoid");

const orders = require("./orders");

const PORT = 3000;

const app = express();
app.use(bodyParser.json());

const exampleId = nanoid(5);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`app listening at http://localhost:${PORT}`);
  console.log("seed orders: ", orders);
});
