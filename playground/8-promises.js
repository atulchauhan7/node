//PROMISES:
const doWorkPromise=new Promise((resolve , reject)=>{
    setTimeout(() => {
        reject([7,4,1])
    }, 2000);
})

doWorkPromise.then((result)=>{
console.log('success ',result)
}).catch((err)=>{
console.log('Error: ',err)
})
