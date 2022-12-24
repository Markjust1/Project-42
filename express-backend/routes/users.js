const express = require("express");
const router = express.Router();
const User = require("../models/user");

// Get all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
// Get one user
router.get("/:id", (req, res) => {
  res.send(req.params.id);
});
// Create user
router.post("/", (req, res) => {});
// Update/modify user
router.patch("/", (req, res) => {});
// Delete user
router.delete("/:id", (req, res) => {});
module.exports = router;
