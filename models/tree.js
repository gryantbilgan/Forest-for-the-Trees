const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const treeData = {};

const treeSchema = new Schema({
    leaf: {
        enum: ['Deciduous', 'Evergreen']
    },
    height: Number
});