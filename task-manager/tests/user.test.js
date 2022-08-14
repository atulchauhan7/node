const request=require('supertest')

const app=require('./app');

test('this is app task',async()=>{
    console.log('this is test ennv')
    await request(app).post('/user').send({
        name:'atul',
        age:21,
    }).expect(201)
})