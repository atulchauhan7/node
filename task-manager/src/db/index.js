const express=require('express');
// const { user } = require('../model/usermodel');
const User=require('../model/usermodel')
const Task=require('../model/task');
const { model } = require('mongoose');
// const mongoose=require('mongoose')
const app=express();
require('./mongoose')

const port=process.env.PORT || 3000

const router=new express.Router();

router.get('/test',(req,res)=>{
    res.send("this is API from my another router")
})

app.use(router)

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
app.get('/users/:id',(req,res)=>{
    const myId=req.params.id;

    User.find({_id:myId}).then((users)=>{
        res.send(users)
    }).catch((err)=>{
        res.status(500).send(err)
    })

})

app.patch('/users/:id',async (req,res)=>{
    const updates=Object.keys(req.body);
    const updatesAllowed=['name','age'];
    const isValidOperation=updates.every((update)=>updatesAllowed.includes(update))
    if(!isValidOperation){
        return res.status(400).send("Please provide valid keys")
    }
    try {
        const user=await User.findByIdAndUpdate(req.params.id ,req.body,{new : true,runValidators:true})

        if(!user){
            return res.status(404).send()
        }
        res.send(user)
        
    } catch (err) {
        res.status(500).send(err)
    }
})


app.patch('/tasks/:id',async (req,res)=>{
    const updates=Object.keys(req.body);
    const allow=['description','completed']
    const isValidOperation=updates.every((update)=>allow.includes(update))

    try {
        const task=await Task.findByIdAndUpdate(req.params.id ,req.body,{new : true,runValidators:true})
        if(!task){
            res.send("no task found")
        }
        res.send(task)
        
    } catch (error) {
        res.send(err)
    } 
})




app.delete('/users/:id',async (req,res)=>{
    // User.findIdAndDelete(req.params.id)
    try {
        const user=await User.findByIdAndDelete(req.params.id)
        if(!user){
            return res.status(404).send()
        }
        res.send(user)
    } catch (error) {
        res.status(500).send()
    }
})


app.listen(port,()=>{
    console.log('Server is running on '+port)
}) 

