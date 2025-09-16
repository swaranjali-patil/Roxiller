// src/backend/db.js
const mysql = require("mysql2");

// Create a connection pool for better performance
const pool = mysql.createPool({
  host: "localhost",
  user: "root",           // replace with your MySQL username
  password: "root", // replace with your MySQL password
  database: "interns", // replace with your database name
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Export the pool for querying
module.exports = pool.promise();
