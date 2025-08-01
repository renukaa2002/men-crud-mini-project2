// models/itemModel.js

import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String },
  price: { type: Number, required: true },
  inStock: { type: Boolean, default: true },
  dateAdded: { type: Date, default: Date.now }
});

const Item = mongoose.model('Item', itemSchema);
export default Item;
