const express = require("express");
const path = require("path");
const pigRoutes = require("./routes/pigRoutes");
const connectDB = require("./database");

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/api", pigRoutes);

// Serve index.html for all other routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
