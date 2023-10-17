const Tree = require('../models/tree');

module.exports = {
    index
};

async function index(req, res) {
    const trees = await Tree.find({});
    res.render('/trees/index', { title: 'All Trees', trees});
}