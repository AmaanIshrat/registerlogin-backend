// import express from 'express';
// import mongoose from 'mongoose';
// import cors from 'cors';
// import authRoutes from './src/routes/authRoutes.js';


// const app = express();

// app.use(cors());
// app.use(express.json());



// app.get("/", (req, res) => {
//   res.send("Hello, your backend is working!");
// });

// // Set PORT for Vercel
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });


// app.use('/api/auth', authRoutes);

// mongoose.connect('mongodb+srv://Amaan:Ishrat123@cluster0.4pjjs.mongodb.net/firstapp?retryWrites=true&w=majority&appName=Cluster0', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
//   .then(() => {
//     app.listen(5000, () => console.log('Server running on http://localhost:5000'));
//     console.log("connected to db...")
//   })
//   .catch((err) => console.log(err));


import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './src/routes/authRoutes.js';

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
    console.log("Connected to MongoDB...");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error(" MongoDB connection error:", err));
