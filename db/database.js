const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');
dotenv.config();

let database;

const initDb = async (callback) => {
    if (database) return callback(null, database);

    try {
        const client = await MongoClient.connect(process.env.MONGODB_URL);
        database = client.db('project1');
        console.log('✅ MongoDB connected to database: project1');
        callback(null, database);
    } catch (err) {
        console.error('❌ MongoDB connection error:', err);
        callback(err);
    }
};

const getDatabase = () => {
    if (!database) throw new Error('Database not initialized');
    return database;
};

module.exports = { initDb, getDatabase };