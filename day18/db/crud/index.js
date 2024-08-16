const express=require("express");
const app=express();
const mongoose=require("mongoose");
const port=3000;

//database connection
mongoose.connect("mongodb://localhost:27017/first")
.then(()=>console.log("databsase connection established"));

const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
})

//model
const User=mongoose.model("User",userSchema)

//user creation

function createUser(){
    const user=new User({
        name:"john",
        age:0,
        email:"jp@example.com"
    })
    user.save()
    .then(()=>console.log("User created"));
}

createUser();

app.get("/",(req,res) => {
    res.send("hello");
})

app.listen(port,()=>{
    console.log(`listening on port ${3000}`);
})

