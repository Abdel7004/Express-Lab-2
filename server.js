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

// MAGIC 8 Ball
const responses = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes definitely",
  "You may rely on it",
  "As I see it yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful",
];

app.get("/magic/:question", (req, res) => {
  const question = req.params.question.replace(/%20/g, " ");
  const response = responses[Math.floor(Math.random() * responses.length)];

  res.send(`<h1>${question}?</h1><p>${response}</p>`);
});
