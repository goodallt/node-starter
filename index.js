const express = require("express");
const bodyParser = require("body-parser");
const { nanoid } = require("nanoid");

const PORT = 3000;

const orders = [
  {
    id: nanoid(5),
    customer: "CH Robinson",
    pickup: {
      address: "123 Main St. San Diego, CA 92109",
      time: new Date("Feb 7 2021 6:00 am PST"),
    },
    dropoff: {
      address: "123 Second St. Oxnard, CA 98249",
      time: new Date("Feb 10 2021 8:00 am PST"),
    },
    weight: 34000,
    rateCents: 120000,
  },
];

const app = express();
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`app listening at http://localhost:${PORT}`);
});
