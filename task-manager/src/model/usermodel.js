const mongoose=require('mongoose');
const validator=require('validator');

const user=mongoose.model('user',{
    name:{
        type:String,
        require:true


        
    },
    age:{
        type:Number,
        validate(value){
            if(value<0){
                throw new Error("age must be positive")
            }
        },
        default:0
    },
    email:{
        type:String,
        require:true,
        trim:true,
        lowercase:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Please provide a valid email address')
            }
        }
    },
    password:{
        type:String,
        minlength:6,
        trim:true,
        required:true,
        validator(value){
            if(value.includes('password')){
                throw new Error("password should not contain the word password thankyou!")
            }
        }
    }
})

module.exports=user