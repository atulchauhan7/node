
const naav= 'atul'
const userAge=21;

const user={
    naav,
    age:userAge,
    location:"bangalore"
}


console.log(user)

const product = {
    label:'red notebook',
    price:3,
    stock:201,
    saleprice:undefined
}
// const label=product.label
const {label:productLabel,stock}=product
console.log(productLabel, stock)

const transaction =(type,{label,stock})=>{
console.log(type,label,stock)
}
transaction('order',product)