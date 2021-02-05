const express = require("express");
const { nanoid } = require("nanoid");

const orders = [
  {
    id: nanoid(5),
    customer: "CH Robinson",
    pickup: {
      address: "123 Main St. San Diego, CA 92109",
      time: new Date("Feb 7 2021 6:00 am"),
    },
    dropoff: {
      address: "123 Second St. Oxnard, CA 98249",
      time: new Date("Feb 10 2021 8:00 am"),
    },
    weight: 34000,
    rateCents: 120000,
  },
];

const app = express();
const port = 3000;
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
