const Tree = require('../models/tree');

module.exports = {
    create,
    delete: deleteComment
}

async function deleteComment(req, res) {
    const tree = await Tree.findOne({ 'comments._id': req.params.id, 'comments.user': req.user._id });
    // if there is a rogue user
    if (!tree) return res.redirect('/trees');
    // remove the comment using the remove method availabe on Mongoose array
    tree.comments.remove(req.params.id);
    // save the updated tree doc
    await tree.save();
    // redirect back to the tree's show view
    res.redirect(`/trees/${tree._id}`);
}

async function create(req, res) {
    const tree = await Tree.findById(req.params.id);
    // add the user-centric info to req.body (new comment)
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar
    // Push the subdocs into Mongoose arrays
    tree.comments.push(req.body);
    console.log(req.body);
    try {
        // save any changes made to the tree doc
        await tree.save();
    } catch (err) {
        console.log(err);
    }
    res.redirect(`/trees/${tree._id}`);
}