const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");

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

router.get("/:id", getUser, (req, res) => {
  res.json(res.user);
});

// Create user

router.post("/", async (req, res) => {
  try {
    // Check if given username exists
    const userExist = await User.findOne({ name: req.body.name });

    if (userExist) {
      return res.status(409).json({ error: "Username already exists" });
    }
    // Encrypting password
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const user = new User({
      name: req.body.name,
      password: hashedPassword,
    });
    const newUser = await user.save();
    if (newUser) {
      res.status(201).json({ message: "User registered successfully" });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// User login

router.post("/login", async (req, res) => {
  const user = await User.findOne({name: req.body.name});
  if (!user) {
    return res.status(400).send("Cannot find user");
  }
  try {
    if (await bcrypt.compare(req.body.password, user.password)) {
      res.send("Success!");
    } else {
      res.send("Login failed");
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update/modify user

router.patch("/:id", getUser, async (req, res) => {
  if (req.body.name != null) {
    res.user.name = req.body.name;
  }
  if (req.body.password != null) {
    res.user.password = req.body.password;
  }

  try {
    const updatedUser = await res.user.save();
    res.json(updatedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete user

router.delete("/:id", getUser, async (req, res) => {
  try {
    await res.user.remove();
    res.json({ message: "Deleted user" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware function

async function getUser(req, res, next) {
  let user;
  try {
    user = await User.findById(req.params.id);
    if (user == null) {
      return res.status(404).json({ message: "Cannot find user" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.user = user;
  next();
}

module.exports = router;
