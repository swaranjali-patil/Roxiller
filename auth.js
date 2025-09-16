// src/backend/routes/auth.js
const express = require("express");
const router = express.Router();
const db = require("../db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Secret key for JWT
const JWT_SECRET = "aP9s8d7f6g5h4j3k2l1q0w9e8r7t6y5u"; 
// change to a strong secret in production

// ================= SIGNUP =================
router.post("/signup", async (req, res) => {
  const { name, email, password, role } = req.body;

  if (!name || !email || !password || !role) {
    return res.status(400).json({ error: "All fields are required" });
  }

  // Check if email already exists
  db.query("SELECT * FROM users WHERE email = ?", [email], async (err, result) => {
    if (err) return res.status(500).json({ error: "Database error" });
    if (result.length > 0) return res.status(400).json({ error: "Email already exists" });

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert new user
    db.query(
      "INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)",
      [name, email, hashedPassword, role],
      (err, result) => {
        if (err) return res.status(500).json({ error: "Database error" });

        const user = { id: result.insertId, name, email, role };
        const token = jwt.sign(user, JWT_SECRET, { expiresIn: "1d" });

        res.json({ user, token });
      }
    );
  });
});

// ================= LOGIN =================
router.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ error: "All fields are required" });

  db.query("SELECT * FROM users WHERE email = ?", [email], async (err, result) => {
    if (err) return res.status(500).json({ error: "Database error" });
    if (result.length === 0) return res.status(400).json({ error: "Invalid credentials" });

    const user = result[0];
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });

    const payload = { id: user.id, name: user.name, email: user.email, role: user.role };
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "1d" });

    res.json({ user: payload, token });
  });
});

module.exports = router;
