const dotenv = require('dotenv');
dotenv.config();

// const MongoClient = require('mongodb').MongoClient; //from video
const { MongoClient } = require('mongodb');



let database;

const initDb = (callback) => {
    if (database) {
        console.log('✅ Database already initialized');
        return callback(null, database);
    }
    MongoClient.connect(process.env.MONGODB_URL)
    .then((client) => {
      database = client.db(); // default database from URI
      console.log('✅ MongoDB connected successfully');
      callback(null, database);
    })
    .catch((err) => {
        console.error('❌ MongoDB connection error:', err);
        callback(err);
    })
};

const getDatabase = () => {
    if (!database) {
        throw new Error('Database not initialized');
    }
    return database;
};


module.exports = {
    initDb,
    getDatabase
};