

// const mongodb = require('mongodb');

// const MongoClient=mongodb.MongoClient
const { ObjectID } = require('bson')
const {MongoClient,ObjectId}=require('mongodb')
const connectionURL='mongodb://127.0.0.1:27017'
const databaseName='task-manager'
const id=new ObjectID();
console.log(id)
console.log(id.getTimestamp())
MongoClient.connect(connectionURL,{useNewUrlParser:true},(error,client)=>{
    if(error){
        return console.log('unable to connect to database!')
    }

    const db =client.db(databaseName);
    // let aa=db.collection('users').findOne({age:21})
    // console.log('ya aa is working fine')

    db.collection('users').find({age:21}).toArray((error,user)=>{
        console.log(user)
    })

    db.collection('users').find({_id:new ObjectID('62d7e96ee3b4ef984b334436')}).count((error,user)=>{
        console.log(user+ 'this is unique id ...')
    })

    


    // db.collection('users').insertOne({
    //     _id:id,
    //     name:"satyam2",
    //     age:900
    // },(error,result)=>{
    //     if(error){
    //         return console.log("Unable to insert user")
    //     }

    //     console.log(result)
    // })

    // db.collection('users').insertMany([{
    //     name:'nobita',
    //     age:51
    // },{
    //     name:'attu',
    //     age:20
    // }],(error,result)=>{
    //     if(error){
    //                 return console.log("Unable to insert user")
    //             }
        
    //             console.log(result.ops)
    // })


})