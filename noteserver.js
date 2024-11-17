import express from 'express';
import dotenv from 'dotenv';
import connectToMongoDB from './BE/src/config/dbConnect.js'; 
import noteRouter from './BE/src/router/note.router.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

// Register the notes router
app.use('/api/note', noteRouter);

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server is running on port ${PORT}`);
});
