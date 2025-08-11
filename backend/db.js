const mongoose = require("mongoose")
const { number } = require("zod")

mongoose.connect("mongodb+srv://admin:linux@cluster0.agngd0u.mongodb.net/")



const userSchema=mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,
        minLength:3,
        maxLength:30
    },
    password:{
        type:String,
        required:true,
        minLength:6
    },
    firstName:{
        type:String,
        required:true,
        trim:true,
        maxLength:50
    },
    lastName:{
        type:String,
        required:true,
        trim:true,
        maxLength:50

    }
})




const User=mongoose.model("User",userSchema)

const accountSchema = new mongoose.Schema({
    // --- The 'userId' field ---
    userId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',                        
        required: true                       
    },
    // --- The 'balance' field ---
    balance: {
        type: Number,
        required: true
    }
});
const Account=mongoose.model("Account",accountSchema)

module.exports={
    User,
    Account
}