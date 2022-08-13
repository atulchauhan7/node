const express=require('express');
const router=express.Router();

router.get('/router',(req,res)=>{
    res.send('router is running')
})

module.exports.router=router