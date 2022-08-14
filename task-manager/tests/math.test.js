const {calculate}=require('./math')
test('hello-world',()=>{
    var ans=calculate(10,2);
    // if(ans!=20){
    //     throw Error ('Test failed now')

    // }
    expect(ans).toBe(20)

})

test('async test',()=>{

    setTimeout((done)=>{

    expect(1).toBe(1)
    done()
        
    },2000)
    // expect(1).toBe(2)
    

})