require("dotenv").config();
require("./config/database");

const Tree = require("./models/tree");

const data = require("./data");

// Function to insert seed data into the database
const seedDatabase = async () => {
  try {
    // Remove existing tree data
    await Tree.deleteMany({});
    // Insert the seed data
    await Tree.create(data.trees);
  } catch (error) {}
};
// Call the seed function to populate the database
seedDatabase();
