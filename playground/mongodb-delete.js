const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client)=>{
    if(err){
        return console.log('Unable to connect to MongoDb server');
    }
    console.log('Connected to MongoDb server');

    var user = client.db('TodoApp');
    
    // user.collection('Todos').deleteMany({
    //     text: 'Eat lunch',
    //     completed: false
    // }).then((result)=>{
    //     console.log(result);
    // });

    // user.collection('Todos').deleteOne({
    //     text: 'Eat lunch',
    //     completed: false
    // }).then((result)=>{
    //     console.log(result);
    // })

    // user.collection('Todos').findOneAndDelete({
    //     completed: false
    // }).then((result)=>{
    //     console.log(result);
    // });

    // user.collection('Users').findOneAndDelete({
    //     _id:new ObjectID('5bb92232824d854eccae4abe')
    // }).then((result)=>{
    //     console.log(result);
    // });

    user.collection('Users').deleteMany({
        name:'Hongyao'
    }).then((result)=>{
        console.log(result);
    })
});