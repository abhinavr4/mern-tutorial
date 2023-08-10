const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DogSchema = new Schema({
    name: String,
    age: Number,
    breed: String,
    owner: String,
    phoneNumber: String,
});

mongoose.model("Dog", DogSchema);