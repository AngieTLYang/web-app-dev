const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/leaflet', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const markerSchema = new mongoose.Schema({
  name: String,
  position: [Number],
  popup: String
});

const Marker = mongoose.model('Marker', markerSchema);

const markers = [
  {
    name: "London",
    position: [51.505, -0.09],
    popup: "A beautiful city in England."
  },
  {
    name: "New York",
    position: [40.7128, -74.0060],
    popup: "The Big Apple."
  },
  {
    name: "Beijing",
    position: [39.9042, 116.4074],
    popup: "The capital of China."
  }
];

Marker.insertMany(markers)
  .then(() => {
    console.log('Data inserted successfully');
    mongoose.connection.close();
  })
  .catch(err => {
    console.error('Error inserting data:', err);
    mongoose.connection.close();
  });

