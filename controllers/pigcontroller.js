const Pig = require("../models/pig");

exports.getAllPigs = async (req, res) => {
  try {
    const pigs = await Pig.find();
    res.json({ statusCode: 200, data: pigs, message: "Success" });
  } catch (error) {
    res.status(500).json({ statusCode: 500, message: "Error fetching data" });
  }
};

exports.addPig = async (req, res) => {
  try {
    const newPig = new Pig(req.body);
    await newPig.save();
    res.json({
      statusCode: 200,
      data: newPig,
      message: "Pig added successfully",
    });
  } catch (error) {
    res.status(500).json({ statusCode: 500, message: "Error adding pig" });
  }
};
