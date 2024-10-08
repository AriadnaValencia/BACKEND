const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true }
});

const ProductModel = mongoose.model('Product', ProductSchema);
module.exports = ProductModel;
