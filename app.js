const express = require("express");
const cors = require('cors');
const transactions = require('./controllers/transactions')


const app = express();
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  next();
})

app.get("/", (req, res) => {
  res.send("Welcome To The Budgeting App");
});

app.use('/transactions', transactions)

app.get('*', (req, res) => {
  res.status(404).send('Page Not Found')
})

module.exports = app;
