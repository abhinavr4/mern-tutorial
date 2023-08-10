const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

require("../models/Dogs");
const Dog = mongoose.model("Dog");

/* 
    db query await findOne({ name: name })
    /dogs?name=Bruno
    req.query

    /dogs/:id
    req.param.id
*/

// GET route
router.get("/", async (req, res) => {
  const name = req.query.name;
  const dogs = await Dog.find({ name });
  res.json(dogs);
});

const checkName = (req, res, next) => {
  if (typeof req.body.name !== "string") {
    res.send(400);
  }
  next();
};

// router.use(checkName);
// middleware

// POST route
router.post(
  "/",
  // checkName
  async (req, res) => {
    const dog = new Dog({
      name: req.body.name,
      age: req.body.age,
      breed: req.body.breed,
      owner: req.body.owner,
      phoneNumber: req.body.phoneNumber,
    });
    await dog.save();
    res.json(dog);
  }
);
HW

// PUT change name of dog by ID
// /dogs/:id

// DELETE dog by ID
// /dogs/:id

module.exports = router;
