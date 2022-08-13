const express=require('express');
// const 

const app=express();
const router=express.Router();

app.use(router)
app.get('/hello',(req,res)=>{
    return res.send("code is running");
})

router.get('/router',(req,res)=>{
    res.send('router is running')
})


router.get('/weather',function(req,res){
    if(!req.query.address){
        res.send('please provide address')
    }

    res.send(req.query.address)
})

// app.listen(process.env.PORT||3000,function(){
//     console.log('Server is running on port ',process.env.PORT||3000)
// })

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});


module.exports={express,app,router} 