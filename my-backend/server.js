// server.js or your relevant file
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const markerRouter = require('./routes/markers'); // Update path as necessary
/*
const app = express();
const port = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/leaflet', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(express.json());
app.use('/api', markerRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
*/
const app = express();
const port = 5000;

// Middleware
app.use(cors()); // Enable CORS for all origins
app.use(express.json()); // Parse JSON bodies
app.use('/api', markerRouter); // Route for markers
app.use(cors({
    origin: 'http://localhost:3000' // Replace with your frontend URL
  }));
  
// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/leaflet', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error.message);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});