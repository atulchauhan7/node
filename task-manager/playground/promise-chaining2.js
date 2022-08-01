const Task=require('../src/model/task');
require('../src/db/mongoose');

Task.findByIdAndUpdate('62d8df8324e4f937fc4b88f3',{completed:false}).then((task)=>{
    console.log(task)
    return Task.countDocuments({completed:false})
}).then((result)=>{console.log(result)}).catch((err)=>{

    console.log(err)
})