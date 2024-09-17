class CartsDAO {
    async getAllCarts() {
      return await CartModel.find();
    }
  
    async getCartById(cartId) {
      return await CartModel.findById(cartId);
    }
  
    async createCart(cartData) {
      return await CartModel.create(cartData);
    }
  
    async updateCart(cartId, cartData) {
      return await CartModel.findByIdAndUpdate(cartId, cartData, { new: true });
    }
  
    async deleteCart(cartId) {
      return await CartModel.findByIdAndDelete(cartId);
    }
  }
  
  module.exports = new CartsDAO();