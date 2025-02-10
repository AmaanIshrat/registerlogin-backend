

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';

dotenv.config(); // Load environment variables from .env

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test API Route
app.get("/", (req, res) => {
  res.send("Hello, your backend is working!");
});

// Routes
app.use('/api/auth', authRoutes);

// MongoDB Connection
const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT || 3000;

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB.......");
    app.listen(PORT, () => console.log(`Server connecting... on port ${PORT}`));
  })
  .catch((err) => console.error(" MongoDB connection error:", err));
