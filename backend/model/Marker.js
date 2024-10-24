const mongoose = require('mongoose');

// Define the schema for the markers
const markerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  position: {
    type: [Number], // Array of numbers for latitude and longitude
    required: true,
    validate: [arrayLimit, 'Position array should have 2 elements']
  },
  popup: {
    type: String,
    required: true
  }
});

// Validate that position array contains exactly 2 elements
function arrayLimit(val) {
  return val.length === 2;
}

// Create the Marker model from the schema
const Marker = mongoose.model('Marker', markerSchema);

module.exports = Marker;