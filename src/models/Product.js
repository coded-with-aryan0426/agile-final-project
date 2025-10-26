/**
 * Product Model
 * This defines the structure of a product in the catalog
 */

class Product {
  constructor(id, name, description, price, category) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.category = category;
    this.createdAt = new Date();
    this.updatedAt = null;
  }
}

module.exports = Product;
