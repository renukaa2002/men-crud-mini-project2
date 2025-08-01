// server.js

import express from 'express';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import itemRoutes from './routes/itemRoute.js';

dotenv.config();
connectDB();

const app = express();
const PORT = 5000;

app.use(express.json()); // Body parser
app.use('/api', itemRoutes); // Use your routes

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
