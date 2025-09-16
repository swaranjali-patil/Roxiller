const express = require("express");
const router = express.Router();
const db = require("../db");

// Create a store (owner only)
router.post("/", (req, res) => {
  const { owner_id, name, location, description } = req.body;
  if (!owner_id || !name) return res.status(400).json({ error: "Owner and name required" });

  db.query(
    "INSERT INTO stores (owner_id, name, location, description) VALUES (?, ?, ?, ?)",
    [owner_id, name, location, description],
    (err, result) => {
      if (err) return res.status(500).json({ error: "Database error" });
      res.json({ id: result.insertId, owner_id, name, location, description });
    }
  );
});

// Get all stores
router.get("/", (req, res) => {
  db.query("SELECT * FROM stores", (err, results) => {
    if (err) return res.status(500).json({ error: "Database error" });
    res.json(results);
  });
});

module.exports = router;
