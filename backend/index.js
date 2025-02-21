
const express = require('express')
const dotenv =require('dotenv');
// const router = express.Router();

const indexRouter=require("./routes");

dotenv.config();
const app = express()
const PORT =process.env.PORT || 7000;
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/",indexRouter);


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


