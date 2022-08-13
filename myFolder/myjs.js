
console.log('Client side Javascript file is loading')


const weatherForm=document.querySelector('form');


weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()

    const search =document.querySelector('input');

    const location=search.value
    fetch("http://localhost:3000?address="+location).then((response)=>{
    response.json().then((data)=>{
        if(data.error){
            console.log(data)
        }else{
        console.log(data.message)
        }
    })
})
})