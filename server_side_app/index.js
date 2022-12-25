const express = require("express");
const cors = require("cors");

const wordList = require("./wordList");
const scoreList = require("./scoreList");
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("API...");
});

app.get("/wordList", (req, res) => {
  res.send(wordList);
});

app.get("/scoreList", (req, res) => {
  res.send(scoreList);
});

const port = process.env.PORT || 5000;

app.listen(port, console.log(`Server running on port ${port}`));
