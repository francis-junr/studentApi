const mongodb = require('mongodb');
 Mongoose = require('mongoose');
const MongoClient = mongodb.MongoClient;

let _db

const mongoConnect = callback => {
    Mongoose.connect('mongodb://localhost:27017/?serverSelectionTimeoutMS=5000&connectTimeoutMS=10000')
    .then(() => console.log('connected'), 
    err => console.log('there was a problem while connecting to database',err)
    )
}
exports.mongoConnect = mongoConnect;
