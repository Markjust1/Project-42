const express = require("express");
const router = express.Router();
const Item = require("../models/item");

// Get all items

router.get("/", async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

// Get one item

router.get("/:id", getItem, (req, res) => {
  res.json(res.item);
});

// Create one

router.post("/", async (req, res) => {
  const item = new Item({
    title: req.body.title,
    image: req.body.image,
    description: req.body.description,
    platform: req.body.platform,
    price: req.body.price,
  });
  try {
    const newItem = await item.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update one

router.patch("/:id", getItem, async (req, res) => {
  if (req.body.title != null) {
    res.user.title = req.body.title;
  }
  if (req.body.image != null) {
    res.user.image = req.body.image;
  }
  if (req.body.description != null) {
    res.user.description = req.body.description;
  }
  if (req.body.platform != null) {
    res.user.platform = req.body.platform;
  }
  if (req.body.price != null) {
    res.user.price = req.body.price;
  }
});

// Delete one

router.delete("/:id", getItem, async (req, res) => {
  try {
    await res.item.remove();
    res.json({ message: "Deleted item" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware function

async function getItem(req, res, next) {
  let item;
  try {
    item = await Item.findById(req.params.id);
    if (item == null) {
      return res.status(404).json({ message: "Cannot find item" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.item = item;
  next();
}

module.exports = router;
