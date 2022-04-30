const mongoose = require("mongoose")
const validator = require("validator")
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")
const userSchema = mongoose.Schema({
    fname:{
        type:String, 
        required:true, 
        trim:true
    }, 
    lname:{
        type:String, 
        required:true, 
        trim:true
    }, 
   
   
    status:{
        type:Boolean, 
        default:false
    },
    email:{
        type:String, 
        required:true, 
        unique:true,
        validate(value){
            if(!validator.isEmail(value)) throw new Error("invalid email format")
        }
    },
    password:{
        type:String, 
        required:true, 
        
    }, 
    tokens : [
        {
            token:{
                type:String,
                required:true
            }
        }
    ]
},
  
   
 {
    timestamps:true  //createdAt, updatedAt
})
userSchema.pre('save', async function(){
    
    const data = this
    if(data.isModified("password"))
        data.password = await bcryptjs.hash(data.password, 10)
})
userSchema.statics.login = async(email, password) =>{
    const user = await User.findOne({email})
    if(!user) throw new Error("invalid email")
    const matched = await bcryptjs.compare(password, user.password)
    if(!matched) throw new Error("invalid password")
    return user
}
userSchema.methods.generateToken = async function(){
    const user = this
    const token = jwt.sign({_id:user._id}, process.env.jwtkey)
    user.tokens = user.tokens.concat({token})
    await user.save()
    return token
}
const User = mongoose.model("User", userSchema)
module.exports = User