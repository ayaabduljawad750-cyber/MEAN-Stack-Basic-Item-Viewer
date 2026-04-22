const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/meanApp")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Simple Schema
const itemSchema = new mongoose.Schema({
  name: String,
});

const Item = mongoose.model("Item", itemSchema);

// Hardcoded Data (insert once)
const seedData = async () => {
  const count = await Item.countDocuments();
  if (count === 0) {
    await Item.insertMany([
      { name: "Learn Angular" },
      { name: "Learn Node.js" },
      { name: "Build MEAN App" },
      { name: "Practice MongoDB" },
    ]);
    console.log("Data seeded");
  }
};
seedData();

// API Route
app.get("/api/items", async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

// Run server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
