const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

let _db;

//Connnection with mongodb
const mongoConnect = (callback)=>{
    MongoClient.connect('mongodb+srv://admin:onlineshoptesting123@onlineshop-pfdfx.mongodb.net/shop')
    .then(client=>{
        console.log('Connected..');
        _db = client.db();
        callback();
    })
    .catch(err=>{
        console.log(err);
        throw err;
    });
}

//Access db
const getDb = ()=>{
    if(_db){
        return _db;
    }
    throw 'No database Found';
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
