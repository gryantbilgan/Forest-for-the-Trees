require('dotenv').config();
require('./config/database');

const Tree = require('./models/tree');

const data = require('./data');

// Function to insert seed data into the database
const seedDatabase = async () => {
    try {
      // Remove existing tree data
      await Tree.deleteMany({});
      // Insert the seed data
      await Tree.insertMany(treeData);
      console.log('Seed data inserted successfully');
    } catch (error) {
      console.error('Error inserting seed data:', error);
    } finally {
      // Close the database connection
      mongoose.disconnect();
    }
  };
  // Call the seed function to populate the database
  seedDatabase();