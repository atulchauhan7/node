require('../src/db/mongoose')

const Task = require('../src/model/task');
const User=require('../src/model/usermodel');

//62d8e157cfbee83b5f012431

// User.findByIdAndUpdate('62d8e157cfbee83b5f012431',{description:'this is my task',age:1111}).then((user)=>{
//     console.log(user)

//     return User.countDocuments({age:21})
// }).then((result)=>{console.log(result)}).catch((e)=>{
//     console.log(e)
// })

// const updateAgeAndCount=async (id,age)=>{

//     // const user=await User.findByIdAndUpdate(id,{age})
//     // const count=await User.countDocuments({age});
//     // return count;

//     //delete
//     const deleteDoc=await User.deleteOne('62d8e157cfbee83b5f012431')
// }

// updateAgeAndCount('62d8e157cfbee83b5f012431',2090).then((count)=>{console.log(count)}).catch((err)=>{
//     console.log(err)
// })

// const deleteTaskAndCount=async (id)=>{
//     const task =await Task.findByIdAndDelete(id);
//     const count=await  Task.countDocuments({completed:false});
//     return count;
// }
// deleteTaskAndCount('62d8dfbc6e829f3871bed40a').then((count)=>{console.log(count)}).catch((err)=>{console.log(err)})

