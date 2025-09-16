// src/backend/server.js
const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const storeRoutes = require("./routes/stores");
const ratingRoutes = require("./routes/ratings");

const app = express();

// ============ MIDDLEWARE ============
app.use(cors());          // Allow cross-origin requests
app.use(express.json());  // Parse JSON requests

// ============ ROUTES ============
app.get("/", (req, res) => {
  res.send("API is running!");
});

app.use("/api/auth", authRoutes);
app.use("/api/stores", storeRoutes);
app.use("/api/ratings", ratingRoutes);

// ============ ERROR HANDLING ============
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

// ============ SERVER ============
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
