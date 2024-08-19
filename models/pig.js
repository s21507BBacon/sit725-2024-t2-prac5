const mongoose = require("mongoose");

const pigSchema = new mongoose.Schema({
  title: String,
  image: String,
  link: String,
  description: String,
});

module.exports = mongoose.model("Pig", pigSchema);
