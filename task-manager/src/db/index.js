const express=require('express');
// const { user } = require('../model/usermodel');
const User=require('../model/usermodel')
const Task=require('../model/task');
const { model } = require('mongoose');
// const mongoose=require('mongoose')
const app=express();
require('./mongoose')

const port=process.env.PORT || 3000

app.use(express.json())
app.post('/users',(req,res)=>{
 
    const user=new User(req.body);

    user.save().then(()=>{
        res.status(201).send(user)
    }).catch((err)=>{
        res.status(500).send(err)
    })
})
  
app.post('/tasks',(req,res)=>{
    const task=new Task(req.body);

    task.save().then(()=>{
        res.send(task)
    }).catch((err)=>{
        res.send(err)
    })
})

app.get('/users',(req,res)=>{

   User.find(req.body).then((users)=>{
     res.send(users)
   }).catch((err)=>{
    res.send(err)
   })


})



app.listen(port,()=>{
    console.log('Server is running on '+port)
})