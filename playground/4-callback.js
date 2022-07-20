

const add=(a,b,callback)=>{
    setTimeout(()=>{
        callback(a+b);
    },2000)
    // callback(5)
}

add(1,4,(sum)=>{
    console.log(sum);
})