const Tree = require('../models/tree');

module.exports = {
    create,
    delete: deleteComment,
    edit,
    update
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

async function edit(req, res) {
    // Note the cool "dot" syntax to query on the property of a subdoc
    const tree = await Tree.findOne({'comments._id': req.params.id});
      // Find the comment subdoc using the id method on Mongoose arrays
      // https://mongoosejs.com/docs/subdocs.html
      const comment = tree.comments.id(req.params.id);
      // Render the comments/edit.ejs template, passing to it the comment
      res.render('comments/edit', { title: 'Make a New Sprout' ,tree, comment });
  }

  async function update(req, res) {
    // Note the cool "dot" syntax to query on the property of a subdoc
    const tree = await Tree.findOne({'comments._id': req.params.id});
      // Find the comment subdoc using the id method on Mongoose arrays
      // https://mongoosejs.com/docs/subdocs.html
      const commentSubdoc = tree.comments.id(req.params.id);
      // Ensure that the comment was created by the logged in user
      if (!commentSubdoc.userId.equals(req.user._id)) return res.redirect(`/trees/${tree._id}`);
      // Update the text of the comment
      commentSubdoc.text = req.body.content;
      try {
          await tree.save();
        } catch (err) {
            console.log(err.message);
        }
        res.redirect(`/trees/${tree._id}`);
  }