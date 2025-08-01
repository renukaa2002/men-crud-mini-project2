// config/db.js

import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // Load variables from .env

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected successfully!');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); // Exit if DB fails to connect
  }
};

export default connectDB;
