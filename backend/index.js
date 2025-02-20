
const express = require('express')
const dotenv =require('dotenv');
const router = express.Router();

dotenv.config();
const app = express()
const PORT =process.env.PORT || 7000;

app.get('/', (req, res) => {
  res.send('Hello World ')
})

app.listen(PORT, () => {
  console.log(`Application is running on port ${PORT}`)
})

//register scenario
router.post('/register',(req,res)=>{
  res.json({msg:"movies added"});
  
})
//login scenario
router.post('/login',(req,res)=>{
  try{
  const {email,password}=req.body;
  console.log({email,password});
  
  res.json({msg:"movies added"});
  }catch(e){
    console.log(e);
    
  }
  
})