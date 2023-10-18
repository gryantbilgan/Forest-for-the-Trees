const express = require('express');
const router = express.Router();
const commentsCtrl = require('../controllers/comments');

// POST /trees/:id/comments
router.post('/trees/:id/comments', commentsCtrl.create);
// DELETE /trees/:id/comments
router.delete('/comments/:id', commentsCtrl.delete);

module.exports = router;