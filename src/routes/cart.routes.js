const express = require('express');
const router = express.Router();
const CartService = require('../services/cart.service');
const authMiddleware = require('../middlewares/auth.middleware');

router.post('/:cid/purchase', authMiddleware(['user']), async (req, res) => {
  try {
    const result = await CartService.purchaseCart(req.params.cid);
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
