const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");
// const cookieSession = require('cookie-session');
// const app = express();

// app.use(cookieSession({
//   keys: 'pink horse',
//   saveUninitialized: false,
//   maxAge: 24 * 60 * 60 * 1000 // 24 hours
// }))

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
  // Checking if user exists
  if (!user) {
    return res.status(400).send("Cannot find user");
  }
  // Checking if password is correct
  await bcrypt.compare(req.body.password, user.password) ? res.status(200).send('Success!') : res.status(403).send("Login failed");
});

// Update/modify user

router.patch("/:id", getUser, async (req, res) => {
  if (req.body.name != null) {
    res.user.name = req.body.name;
  }
  if (req.body.password != null) {
    res.user.password = req.body.password;
  }
  if (req.body.fullName != null) {
    res.user.fullName = req.body.fullName;
  }
  if (req.body.address != null) {
    res.user.address = req.body.address;
  }
  if (req.body.city != null) {
    res.user.city = req.body.city;
  }
  if (req.body.province != null) {
    res.user.province = req.body.province;
  }
  if (req.body.image != null) {
    res.user.image = req.body.image;
  }
  const cards = req.body.cards;
  cards.map((el)=>{

    if (el.cardNumber != null) {
      res.user.cards.push(el)
    }
  }
  )

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
