
// server.js or your relevant file
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const markerRouter = require('./routes/markers'); // Update path as necessary
const userRouter = require('./routes/users'); // Path to user routes
const app = express();
const port = process.env.PORT || 5000;
require('dotenv').config();

// Middleware
app.use(cors({
  origin: 'http://localhost:3000' // Replace with your frontend URL
}));
app.use(express.json()); // Parse JSON bodies

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/leaflet', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error.message);
});

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;

// Routes
app.use('/api/markers', markerRouter); // Marker routes
app.use('/api/users', userRouter); // User routes

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
