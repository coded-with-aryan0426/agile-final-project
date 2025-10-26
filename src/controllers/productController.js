// In-memory product storage (replace with database in production)
let products = [];
let currentId = 1;

// Create a new product
exports.createProduct = (req, res) => {
  const { name, description, price, category } = req.body;
  
  const newProduct = {
    id: currentId++,
    name,
    description,
    price,
    category,
    createdAt: new Date()
  };
  
  products.push(newProduct);
  res.status(201).json({ message: 'Product created successfully', product: newProduct });
};

// Get all products
exports.getAllProducts = (req, res) => {
  res.status(200).json({ products, count: products.length });
};

// Get product by ID
exports.getProductById = (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find(p => p.id === productId);
  
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }
  
  res.status(200).json({ product });
};

// Update a product
exports.updateProduct = (req, res) => {
  const productId = parseInt(req.params.id);
  const productIndex = products.findIndex(p => p.id === productId);
  
  if (productIndex === -1) {
    return res.status(404).json({ message: 'Product not found' });
  }
  
  const { name, description, price, category } = req.body;
  products[productIndex] = {
    ...products[productIndex],
    name: name || products[productIndex].name,
    description: description || products[productIndex].description,
    price: price || products[productIndex].price,
    category: category || products[productIndex].category,
    updatedAt: new Date()
  };
  
  res.status(200).json({ message: 'Product updated successfully', product: products[productIndex] });
};

// Delete a product
exports.deleteProduct = (req, res) => {
  const productId = parseInt(req.params.id);
  const productIndex = products.findIndex(p => p.id === productId);
  
  if (productIndex === -1) {
    return res.status(404).json({ message: 'Product not found' });
  }
  
  products.splice(productIndex, 1);
  res.status(200).json({ message: 'Product deleted successfully' });
};
