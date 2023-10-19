const express = require("express");
const router = express.Router();
const commentsCtrl = require("../controllers/comments");
const ensureLoggedIn = require("../config/ensureLoggedIn");

// POST /trees/:id/comments
router.post("/trees/:id/comments", ensureLoggedIn, commentsCtrl.create);
// DELETE /trees/:id/comments
router.delete("/comments/:id", ensureLoggedIn, commentsCtrl.delete);
// PUT /trees/:id/comments
router.put("/comments/:id", ensureLoggedIn, commentsCtrl.update);
// GET /trees/:id/comments
router.get("/comments/:id/edit", ensureLoggedIn, commentsCtrl.edit);

module.exports = router;
