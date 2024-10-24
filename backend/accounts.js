const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/leaflet', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Define User Schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

// Create User Model
const User = mongoose.model('User', userSchema);

// Sample user data
const users = [
  {
    username: "john_doe",
    email: "john@example.com",
    password: "password123"  // Plain text password for now
  },
  {
    username: "jane_smith",
    email: "jane@example.com",
    password: "password456"  // Plain text password for now
  },
  {
    username: "alice_jones",
    email: "alice@example.com",
    password: "password789"  // Plain text password for now
  }
];

// Hash passwords and insert users
const insertUsers = async () => {
  try {
    // Hash passwords
    const hashedUsers = await Promise.all(users.map(async user => {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      return {
        ...user,
        password: hashedPassword
      };
    }));

    // Insert users into database
    await User.insertMany(hashedUsers);
    console.log('User data inserted successfully');
  } catch (err) {
    console.error('Error inserting user data:', err);
  } finally {
    mongoose.connection.close();
  }
};

insertUsers();
