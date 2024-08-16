const express=require ("express");
const app=express();

app.get("/about",(req,res)=>{
    res.send("welcome to HELL");
})

app.listen("5000",(req,res)=>{
    console.log("listening on port 5000 ");
})
