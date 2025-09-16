const express = require("express");
const router = express.Router();
const db = require("../db");

// Add a rating
router.post("/", (req, res) => {
  const { user_id, store_id, rating, comment } = req.body;
  if (!user_id || !store_id || !rating) return res.status(400).json({ error: "Required fields missing" });

  db.query(
    "INSERT INTO ratings (user_id, store_id, rating, comment) VALUES (?, ?, ?, ?)",
    [user_id, store_id, rating, comment],
    (err, result) => {
      if (err) return res.status(500).json({ error: "Database error" });
      res.json({ id: result.insertId, user_id, store_id, rating, comment });
    }
  );
});

// Get ratings for a store
router.get("/:store_id", (req, res) => {
  const store_id = req.params.store_id;
  db.query(
    "SELECT r.id, r.rating, r.comment, u.name AS user_name FROM ratings r JOIN users u ON r.user_id = u.id WHERE r.store_id = ?",
    [store_id],
    (err, results) => {
      if (err) return res.status(500).json({ error: "Database error" });
      res.json(results);
    }
  );
});

module.exports = router;
