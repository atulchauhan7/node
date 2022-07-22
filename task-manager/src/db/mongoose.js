const mongoose=require('mongoose');
// const validator=require('validator')


mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    useNewUrlParser:true,
    // useCreateindex:true
})



// const me=new user({
//     name:'aryaan shah rukh khan',
//     age:+3,
//     email:"atul@gmail.com"
// })

// me.save().then(()=>{
//     console.log(me)
// }).catch((err)=>{
//     console.log(2)
// })


// const task=mongoose.model('user',{
//     description:{
//         type:String
//     },
//     completed:{type:Boolean}
// })


// const Task=new task({
//     description:'atul is the best coder of ace turtle',
//     completed:true
// })

// Task.save().then(()=>{console.log(Task)}).catch((err)=>{console.log(err)})