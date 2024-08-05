const express=require("express");
const app=express();
const cors=require("cors");
const port=3000;

app.use(cors());

app.get("/data",(req,res)=>{
    res.json({
        message:"hello",
        item:"tuesday",
    })
})

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})