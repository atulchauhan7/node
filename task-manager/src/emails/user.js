const express=require('express');
const app=express()
const { sendGridFunc2}=require('./account');

app.get('/testing',(req,res)=>{
    res.send('it is working')
})

app.post('/userCreate',(req,res)=>{
    
    // const email=req.body.email
    // const name=req.body.name
    sendGridFunc2(req.body.email,req.body.name)
    res.status(201).send({email:req.body.email,name:req.body.name})

    
    
})


// app.listen(process.env.PORT || 3000 , function () {
//     console.log('Server is running on port '+process.env.PORT||3000)
// })
app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});