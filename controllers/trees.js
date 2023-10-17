const Tree = require('../models/tree');

module.exports = {
    index,
    // show
};

async function index(req, res) {
    const trees = await Tree.find({});
    res.render('trees/index', { title: 'All Trees', trees});
}

// async function show(req, res) {
//     const tree = await Tree.findById
// }