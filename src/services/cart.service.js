const CartDAO = require('../daos/cart.dao');
const Ticket = require('../models/Ticket');

class CartService {
  async purchaseCart(cartId) {
    const cart = await CartDAO.findCartById(cartId);

    const purchaseItems = [];
    const unavailableItems = [];

    for (const item of cart.items) {
      const product = await ProductDAO.findProductById(item.productId);
      if (product.stock >= item.quantity) {
        product.stock -= item.quantity;
        await product.save();
        purchaseItems.push(item);
      } else {
        unavailableItems.push(item.productId);
      }
    }

    const totalAmount = purchaseItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const ticket = await Ticket.create({
      amount: totalAmount,
      purchaser: cart.user.email,
    });

    // Filtrar los productos no comprados
    cart.items = cart.items.filter(item => unavailableItems.includes(item.productId));
    await cart.save();

    return { ticket, unavailableItems };
  }
}

module.exports = new CartService();
