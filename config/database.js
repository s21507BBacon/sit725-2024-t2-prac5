const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB Atlas");
  } catch (error) {
    console.log("Error connecting to MongoDB Atlas:", error);
    process.exit(1);
  }
};

module.exports = connectDB;
