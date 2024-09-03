const ProductModel = require('../models/Product');

class ProductDAO {
  async createProduct(data) {
    return await ProductModel.create(data);
  }

  async updateProduct(id, data) {
    return await ProductModel.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteProduct(id) {
    return await ProductModel.findByIdAndDelete(id);
  }

  async findProductById(id) {
    return await ProductModel.findById(id);
  }

  async getAllProducts() {
    return await ProductModel.find();
  }
}

module.exports = new ProductDAO();
