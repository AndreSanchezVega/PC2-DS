import mongoose from 'mongoose';
import dns from 'dns';

dns.setServers(['8.8.8.8', '1.1.1.1']);

class DatabaseManager {
  constructor() {
    this._connected = false;
  }

  static getInstance() {
    if (!DatabaseManager._instance) {
      DatabaseManager._instance = new DatabaseManager();
    }
    return DatabaseManager._instance;
  }

  async connect() {
    if (this._connected) {
      console.log('MongoDB: reusing existing connection');
      return;
    }
    try {
      const conn = await mongoose.connect(process.env.MONGO_URI);
      this._connected = true;
      console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
      console.error('MongoDB connection error:', error.message);
      process.exit(1);
    }
  }

  isConnected() {
    return this._connected;
  }
}

export default DatabaseManager;
