const express = require("express");
const path = require("path");
const pigRoutes = require("./routes/pigRoutes");
const connectDB = require("./config/database");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api", pigRoutes);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
