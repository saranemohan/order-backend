import mongoose from 'mongoose';

const accountDetailsSchema = new mongoose.Schema({
  user: { type: String, required: true },
  credit: { type: Number, required: true },
  debit: { type: Number, required: true },
  balance: { type: Number, required: true },
  order: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Order', 
    },
},{
  timestamps:true
});

const AccountDetails = mongoose.model('AccountDetails', accountDetailsSchema);
export default AccountDetails;