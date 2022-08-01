const express=require('express');
require('../db/mongoose')
const User=require('../model/usermodel');
const Task=require('../model/task');

const app=express()
const port=process.env.PORT || 3000
const router=express.Router()
app.use(router)
app.use(express.json());

// app.use(User);
// app.use(Task);


const bcrypt=require('bcryptjs')



const myFunction= async ()=>{
    const password='red12345!';
    const hashedPassword=await bcrypt.hash(password,8);
    console.log(hashedPassword) 
    const isMatch=await bcrypt.compare('Red12345!',hashedPassword)
    console.log(isMatch)
}
myFunction()
app.get('/users/:id',(req,res)=>{
    const myId=req.params.id;

    User.find({_id:myId}).then((users)=>{
        res.send(users)
    }).catch((err)=>{
        res.status(500).send(err)
    })

})



app.listen(port,()=>{
    console.log("SerVer is Running on "+port)
})