const ProductDAO = require('../daos/product.dao');
const ProductDTO = require('../dtos/product.dto');

class ProductRepository {
  async createProduct(data) {
    const product = await ProductDAO.createProduct(data);
    return new ProductDTO(product);
  }

  async updateProduct(id, data) {
    const product = await ProductDAO.updateProduct(id, data);
    return new ProductDTO(product);
  }

  async deleteProduct(id) {
    return await ProductDAO.deleteProduct(id);
  }

  async findProductById(id) {
    const product = await ProductDAO.findProductById(id);
    return new ProductDTO(product);
  }

  async getAllProducts() {
    const products = await ProductDAO.getAllProducts();
    return products.map(product => new ProductDTO(product));
  }
}

module.exports = new ProductRepository();
