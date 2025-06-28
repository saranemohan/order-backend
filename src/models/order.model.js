import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  securityId: { type: Number, required: true },
  type: { type: String, required: true, enum: ['BUY', 'SELL'] },
  value: { type: Number, required: true },
  quantity: { type: Number, required: true, min: 1 },
  createdBy: { type: String, required: true },
},{
  timestamps:true
});

const Order = mongoose.model('Order', orderSchema);
export default Order;