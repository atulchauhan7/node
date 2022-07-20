

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

    //FIND

    // let aa=db.collection('users').findOne({age:21})
    // console.log('ya aa is working fine')

    // db.collection('users').find({age:21}).toArray((error,user)=>{
    //     console.log(user)
    // })

    // db.collection('users').find({_id:new ObjectID('62d7e96ee3b4ef984b334436')}).count((error,user)=>{
    //     console.log(user+ 'this is unique id ...')
    // })

    

    //CREATE


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


    //UPDATE
    // const updatePromise=db.collection('users').updateOne({name:'bittu'},{$set:{name:'atul rameshwar chauhan'}})

    // updatePromise.then((result)=>{
    //     console.log(result)
    // }).catch((err)=>{
    //     console.log(err)
    // })

//     db.collection('users').updateMany({name:'atul'},{$set:{name:'my_name_is_atul'}}).then((result)=>{
//         console.log(result)
//     }).catch((err)=>{
//         console.log(err)
//     })



//DELETE:
// db.collection('users').deleteMany({age:21}).then((result)=>{
//     console.log(result)
// }).catch((err)=>{
//     console.log(err)
// })





})