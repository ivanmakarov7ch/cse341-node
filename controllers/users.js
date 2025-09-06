const mongodb = require('../db/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (reg, res) => {
    const resutl = await mongodb.getDatabase().db().collection('users').find();
    resutl.toArray().then((users) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(users);
    });
};

const getSingle = async (reg, res) => {
    const userId = new Object(req.params.id);
    const resutl = await mongodb.getDatabase().db().collection('users').find({_id: userId});
    resutl.toArray().then((users) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(users[0]);
    });
};

module.exports = {
    getAll,
    getSingle
}