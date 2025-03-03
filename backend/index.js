
const express = require('express')
const dotenv =require('dotenv');
// const router = express.Router();
const mongoose =require("mongoose");
const indexRouter=require("./routes");

dotenv.config();
const app = express()
const PORT =process.env.PORT || 7000;
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/",indexRouter);

mongoose.connect(process.env.DB_URL).then(()=>{
  console.log("Database connected successfully"); 
}).catch((err)=>{
  console.log("Error connecting to database",err);
  
})

app.use((req,res,next)=>{
  req.body.country="NP";
  req,body.currenTime=new Date();
  next(); //also used ip address pckg-ip,ip-address
})

//error handling middleware
app.use((err,req,res,next)=>{
  const erroMsg = err ? err.toString() : "Something Went Wrong";
  res.status(500).json({msg:erroMsg});
  
})


app.listen(PORT, () => {
  console.log(`Application is running on port ${PORT}`)
})


