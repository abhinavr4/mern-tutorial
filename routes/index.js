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

// GET dog details by name
router.get("/", async (req, res) => {
  const name = req.query.name;
  const dog = await Dog.find({ name });
  res.json(dog);
});

// Get all dog details
router.get("/all", async (req, res) => {
  const dogs = await Dog.find();
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

// POST dog details
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

// PUT change name of dog by ID
// /dogs/:id
router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const dog = await Dog.findByIdAndUpdate(id, req.body, { new: true });
  res.json(dog);
});

// DELETE dog by ID
// /dogs/:id
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  await Dog.findByIdAndDelete(id);
  res.json({
    message: "Dog details deleted!",
  });
});

module.exports = router;
