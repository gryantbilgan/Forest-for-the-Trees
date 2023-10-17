const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const treeSchema = new Schema({
    name: String,
    scientific_name: String,
    max_height: Number,
    leaf: String
});

module.exports = mongoose.model('Tree', treeSchema);