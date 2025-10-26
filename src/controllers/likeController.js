// In-memory like/dislike storage (replace with database in production)
let likes = {};

// Like a product
exports.likeProduct = (req, res) => {
  const productId = req.params.id;
  
  if (!likes[productId]) {
    likes[productId] = { likes: 0, dislikes: 0 };
  }
  
  likes[productId].likes += 1;
  
  res.status(200).json({ 
    message: 'Product liked successfully', 
    productId, 
    likes: likes[productId].likes 
  });
};

// Dislike a product
exports.dislikeProduct = (req, res) => {
  const productId = req.params.id;
  
  if (!likes[productId]) {
    likes[productId] = { likes: 0, dislikes: 0 };
  }
  
  likes[productId].dislikes += 1;
  
  res.status(200).json({ 
    message: 'Product disliked successfully', 
    productId, 
    dislikes: likes[productId].dislikes 
  });
};

// Get product likes
exports.getProductLikes = (req, res) => {
  const productId = req.params.id;
  
  if (!likes[productId]) {
    likes[productId] = { likes: 0, dislikes: 0 };
  }
  
  res.status(200).json({ 
    productId, 
    likes: likes[productId].likes,
    dislikes: likes[productId].dislikes 
  });
};
