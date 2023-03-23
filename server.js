const express = require("express");
const app = express();
app.listen(3001);

// GREETINGS
app.get("/greeting/:name", (req, res) => {
  const name = req.params.name;
  let message;
  if (name) {
    message = `What's up, ${name}!`;
  } else {
    message = "Hello, stranger";
  }
  res.send(message);
});

// TIP CALCULATOR
app.get("/tip/:total/:tipPercentage", (req, res) => {
  const total = Number(req.params.total);
  const tipPercentage = Number(req.params.tipPercentage);

  const tipAmount = (total * tipPercentage) / 100;

  res.send(tipAmount.toString());
});
