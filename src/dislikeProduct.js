const express = require('express');
const router = express.Router();

/**
 * Dislike a product
 * POST /products/:id/dislike
 */
router.post('/:id/dislike', (req, res) => {
  try {
    const { id } = req.params;
    
    // TODO: Implement database logic to increment dislikes
    // TODO: Implement logic to prevent duplicate dislikes from same user
    // For now, returning a mock response
    
    const product = {
      id,
      name: 'Sample Product',
      likes: 10,
      dislikes: 3 // Incremented dislike count
    };
    
    res.status(200).json({
      message: 'Product disliked successfully',
      product
    });
  } catch (error) {
    res.status(500).json({
      error: 'Internal Server Error',
      message: error.message
    });
  }
});

module.exports = router;
