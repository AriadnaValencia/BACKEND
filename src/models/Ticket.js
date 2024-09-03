const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  code: { type: String, unique: true, required: true },
  purchase_datetime: { type: Date, default: Date.now },
  amount: { type: Number, required: true },
  purchaser: { type: String, required: true },
});

ticketSchema.pre('save', function (next) {
  this.code = `TCK-${Date.now()}`;
  next();
});

module.exports = mongoose.model('Ticket', ticketSchema);
