// db/connect.js
const { MongoClient } = require('mongodb');

const uri = "your-mongodb-connection-string";

const client = new MongoClient(uri);

const connectDB = async () => {
    try {
        await client.connect();
        console.log("Connected to MongoDB");
    } catch (err) {
        console.error(err);
    }
};

module.exports = connectDB;