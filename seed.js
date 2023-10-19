require("dotenv").config();
require("./config/database");

const Tree = require("./models/tree");

const data = require("./data");

// Function to insert seed data into the database
const seedDatabase = async () => {
  try {
    console.log(data);
    // Remove existing tree data
    await Tree.deleteMany({});
    // Insert the seed data
    await Tree.create(data.trees);
    console.log("Seed data inserted successfully");
  } catch (error) {
    console.error("Error inserting seed data:", error);
  }
};
// Call the seed function to populate the database
seedDatabase();
