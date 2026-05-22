import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import DatabaseManager from './config/db.js';
import authRoutes from './routes/auth.js';
import reportRoutes from './routes/reports.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

DatabaseManager.getInstance().connect();

const allowedOrigins = [
  process.env.CLIENT_URL,
  'http://localhost:5173',
  'http://127.0.0.1:5173'
].filter(Boolean);

app.use(cors({ origin: allowedOrigins }));
app.use(express.json({ limit: '10mb' }));

app.use('/api/auth', authRoutes);
app.use('/api/reports', reportRoutes);

app.get('/', (req, res) => {
  res.send('UrbanetPeru backend is running');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
