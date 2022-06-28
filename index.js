import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import emailRouter from './routes/email.js';

const app = express();
dotenv.config();

app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/email', emailRouter);

app.get('/', (req, res) => {
    res.send('APP IS RUNNING.');
});

const PORT = process.env.PORT || 5000;    // backup
const HOST = '0.0.0.0';

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, HOST, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);