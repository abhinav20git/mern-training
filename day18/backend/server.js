const express=require('express');
const path=require('path');
const app=express();
import users from "./users.js"

app.get("/api/users",(req,res)=>{
    
    
})

// app.get("/",(req,res)=>{
    // res.sendFile(path.join(__dirname,'index.html'));
    // res.send("jyyx");
// });
// app.get("/registration",(req,res)=>{
//     res.sendFile(path.join(__dirname,'registration.html'));
    // res.redirect('/login');
    // res.send("jyyx");
// })

// app.get("/login",(req,res)=>{
//     res.sendFile(path.join(__dirname,'login.html'));
// })

app.listen(3000,()=>{
    console.log("listening on port 3000");
})