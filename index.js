const express=require('express')
const app=express()
const cors=require("cors")
require("dotenv").config()
const mongoose=require("mongoose")
const UserRouter=require("./Router/User.Router")
const PORT=process.env.PORT||8080
const MONGO_URL=process.env.MONGO_URL
app.use(express.urlencoded({extended : true}))
app.use(cors());
app.use(express.json())
app.use("/user",UserRouter)
mongoose.set("strictQuery", false);
app.get('/',(req,res)=>{res.send('hello')})
 

mongoose.connect("mongodb+srv://skismile:7867@cluster0.hs4mwc2.mongodb.net/test",()=>{
app.listen(8080,()=>{console.log('server is runing on port 8080')})
})

  



