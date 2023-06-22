import mongoose from 'mongoose';

const visitorSchema = new mongoose.Schema(
  {
    count: { type: Number, default: 0 },
  },
  { timestamps: true }
);


mongoose.models = {}
export default mongoose.model("Visitor", visitorSchema);
