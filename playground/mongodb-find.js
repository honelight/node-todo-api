const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client)=>{
    if(err){
        return console.log('Unable to connect to MongoDb server');
    }
    console.log('Connected to MongoDb server');

    var user = client.db('TodoApp');
    // user.collection('Todos').find({
    //     _id: new ObjectID('5bb5512199c02c03e8d2591f')
    // }).toArray().then((docs)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err)=>{
    //     console.log('Unable to fetch todos', err);
    // });

    // user.collection('Todos').find({
    //     _id: new ObjectID('5bb5512199c02c03e8d2591f')
    // }).count().then((count)=>{
    //     console.log('Todo\'s count');
    //     console.log(count);
    // }, (err)=>{
    //     console.log('Unable to fetch todos', err);
    // });

    user.collection('Users').find({
        name:'Hongyao'
    }).toArray().then((docs)=>{
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err)=>{
        console.log('Unable to fetch todos', err);
    })

    client.close();
});