// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client)=>{
    if(err){
        return console.log('Unable to connect to MongoDb server');
    }
    console.log('Connected to MongoDb server');

    // var db = client.db('TodoApp');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result)=>{
    //     if(err){
    //         return console.log('Unable to insert todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    var user = client.db('TodoApp');
    user.collection('Users').insertOne({
        name:'Hongyao',
        age:29,
        location:'Atlanta'
    }, (err, result)=>{
        if(err)
            return console.log('Unable to insert todo', err);
        console.log(JSON.stringify(result.ops, undefined, 2));
    })

    client.close();
});