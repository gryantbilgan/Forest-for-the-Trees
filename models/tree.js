const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    userName: String,
    userAvatar: String
}, {
    timestamps: true
})

const treeSchema = new Schema({
    name: String,
    scientific_name: String,
    max_height: Number,
    leaf: String,
    comments: [commentSchema]
});

module.exports = mongoose.model('Tree', treeSchema);