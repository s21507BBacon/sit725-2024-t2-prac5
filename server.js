require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB Atlas");
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB Atlas:", error);
  });

const pigSchema = new mongoose.Schema({
  title: String,
  image: String,
  link: String,
  description: String,
});

const Pig = mongoose.model("Pig", pigSchema);

app.get("/api/projects", async (req, res) => {
  try {
    const pigs = await Pig.find();
    res.json({ statusCode: 200, data: pigs, message: "Success" });
  } catch (error) {
    res.status(500).json({ statusCode: 500, message: "Error fetching data" });
  }

  app.post("/api/projects", async (req, res) => {
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
  });
});

var port = process.env.port || 3000;

app.listen(port, () => {
  console.log("App listening to: " + port);
});
