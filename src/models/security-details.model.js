import mongoose from 'mongoose';

const securityDetailsSchema = new mongoose.Schema({
  name: { type: Number, required: true },
  value: { type: Number, required: true }
},{
  timestamps:true
});

const SecurityDetails = mongoose.model('SecurityDetails', securityDetailsSchema);
export default SecurityDetails;