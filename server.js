import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import authRoutes from './src/routes/authRoutes.js';


const app = express();

app.use(cors());
app.use(express.json());



app.get("/", (req, res) => {
  res.send("Hello, your backend is working!");
});

// Set PORT for Vercel
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


app.use('/api/auth', authRoutes);

mongoose.connect('mongodb+srv://Amaan:Ishrat123@cluster0.4pjjs.mongodb.net/firstapp?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    app.listen(5000, () => console.log('Server running on http://localhost:5000'));
    console.log("connected to db...")
  })
  .catch((err) => console.log(err));
