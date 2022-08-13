// var obj={
//     name:'atul',
//     age:21,
//     class:'technology'
// }

// var arr=Object.keys(obj)

// var arr2=Object.values(obj)

// console.log(arr,arr2)

// const atul=(error,atuu)=>{
//     if(error){
//         console.log(error);
//     }
//     else{
//         console.log(atuu)
//     }
// }

// atul(9,2)
var arr={name:'atul',age:'21'};
arr.json().then((res)=>{
    console.log(res)
});

console.log([arr])