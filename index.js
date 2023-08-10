const express = require("express");
const mongoose = require("mongoose");
const app = express();

const url = "mongodb://localhost/dogs"; // Check this

mongoose.connect(url);

const dogsRouter = require("./routes");

// let, var, const
const port = 3000;

app.use(express.json()); // for parsing application/json (middleware)

app.use("/dogs", dogsRouter); // use dogsRouter for all routes starting with /dogs

// arrow function syntax
// GET route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// POST route
app.post("/", (req, res) => {
  const num1 = req.body.num1;
  const num2 = req.body.num2;
  res.json({ result: num1 + num2 });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
