const express=require("express");
const app=express();
const mongoose=require("mongoose");
const port=5000;
const cors=require('cors');
const bodyParser=require('body-parser');
//middleware
app.use(cors());
app.use(bodyParser.json());
//database connection
mongoose.connect("mongodb://localhost:27017/testDatabase")
.then(()=>console.log("databsase connection established"))
.catch((err)=>console.log("error conneecting"+err));


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
        
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

//model
const User=mongoose.model("User",userSchema)

app.post('/api/users',async (req,res)=>{
    try{
        const newUser= new User(req.body);
        const savedUser=await newUser.save();
        res.json(savedUser);
    }catch(err){
        res.status(404).json({error:err.message});
    }
});


app.get("/api/users",async (req,res) => {
    try{
        const users = await User.find();
        res.json(users);
    }
    catch(err){
        res.status(404).json({error:err.message});
    }
})

app.get("/",(req,res) => {
    res.send("hello");
})

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})
