const path=require('path')
const express = require('express');

const app=express();
const publicDirectoryPath=path.join(__dirname,'../public')



app.use(express.static(publicDirectoryPath));

app.listen((process.env.PORT || 3000 ),()=>{
    console.log("Server is running on port "+ (process.env.PORT||3000)) 
}) 
