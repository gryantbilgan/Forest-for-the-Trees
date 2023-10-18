const express = require('express');
const router = express.Router();

const treesCtrl = require('../controllers/trees');

// GET /trees
router.get('/', treesCtrl.index);
// GET /trees/:id
router.get('/:id', treesCtrl.show);

module.exports = router;