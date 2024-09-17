const CartsDAO = require('../daos/carts.dao');

class CartsRepository {
  async getAllCarts() {
    return await CartsDAO.getAllCarts();
  }

  async getCartById(cartId) {
    return await CartsDAO.getCartById(cartId);
  }

  async createCart(cartData) {
    return await CartsDAO.createCart(cartData);
  }

  async updateCart(cartId, cartData) {
    return await CartsDAO.updateCart(cartId, cartData);
  }

  async deleteCart(cartId) {
    return await CartsDAO.deleteCart(cartId);
  }
}

module.exports = new CartsRepository();
