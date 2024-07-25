const express = require('express');
const Marker = require('../model/Marker');
const router = express.Router();

// Get all markers
router.get('/markers', async (req, res) => {
  try {
    const markers = await Marker.find();
    res.json(markers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;