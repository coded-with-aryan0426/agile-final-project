const express = require('express');
const router = express.Router();
const likeController = require('../controllers/likeController');

// Like/Dislike operations
router.post('/product/:id/like', likeController.likeProduct);
router.post('/product/:id/dislike', likeController.dislikeProduct);
router.get('/product/:id/likes', likeController.getProductLikes);

module.exports = router;
