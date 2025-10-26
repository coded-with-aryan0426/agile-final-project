const express = require('express');
const router = express.Router();

/**
 * Like a product
 * POST /products/:id/like
 */
router.post('/:id/like', (req, res) => {
  try {
    const { id } = req.params;
    
    // TODO: Implement database logic to increment likes
    // TODO: Implement logic to prevent duplicate likes from same user
    // For now, returning a mock response
    
    const product = {
      id,
      name: 'Sample Product',
      likes: 11, // Incremented like count
      dislikes: 2
    };
    
    res.status(200).json({
      message: 'Product liked successfully',
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
