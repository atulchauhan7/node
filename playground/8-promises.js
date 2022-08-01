//PROMISES:
// const doWorkPromise=new Promise((resolve , reject)=>{
//     setTimeout(() => {
//         reject([7,4,1])
//     }, 2000);
// })

// doWorkPromise.then((result)=>{
// console.log('success ',result)
// }).catch((err)=>{
// console.log('Error: ',err)
// })

const add=(a,b)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(a+b)
        },2000)
    })
}
// add(1,2).then((sum)=>{
//     console.log(sum)
//     add(sum,5).then((sum)=>{
//         console.log(sum)
//     }).catch((e)=>{
//         console.log(e)
//     })
// }).catch((e)=>{
//     console.log(e)
// })

add(1,1).then((sum)=>{
    console.log(sum)

    return add(sum,4)
}).then((sum2)=>{
    console.log(sum2)
})