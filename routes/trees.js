const express = require('express');
const router = express.Router();

const treesCtrl = require('../controllers/trees');

// GET /trees
router.get('/', treesCtrl.index);

module.exports = router;