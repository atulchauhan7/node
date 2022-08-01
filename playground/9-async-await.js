
const add=(a,b)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(a<0 || b<0){
                return reject("Numbers must be non-negative")
            }
            resolve(a+b)
        },2000)
    })
}

const doWork = async ()=>{
    // throw new Error('error is on')
    //  return  'atul'

    const sum =  await add(1,99)
    const sum2 = await add(sum,100)
    const sum3 = await add(sum2,-100)
    return sum3
    
}

// console.log(doWork())
doWork().then((result)=>{console.log("result",result)}).catch((e)=>{console.log("error",e)})


const updateAgeAndCount = async()=>{
    
}