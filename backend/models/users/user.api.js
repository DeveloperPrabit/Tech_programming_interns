
const router=require("express").Router();
const {mw} =require('../../utils/checkRole')
const event=require('events');

const {generateToken,verifyToken} = require('../../utils/token.js')
const {sendMail} =require('../../services/mailer');
// const mw=(req,res,next)=>{ //route level middleware
//     const {username,password}=req.headers;
//     if(username === "ff" && password === ""){
//         next();
//     }
//     res.status(404).json({msg:"user unauthorized"});
// }
const eventEmitter= new event.EventEmitter();

eventEmitter.addListener("signup",(email)=>{
    sendMail({
        email,
        subject:"Welcome to our platform",
        htmlMsg:"<b>Thank you for signing news app </b>",
    })
});
router.get('/',mw,(req,res,next)=>{
    try{
        res.json({msg:"user API is working"});
    } catch(e){
        next(e);
    }
})

router.post('/register',(req,res,next)=>{
    try{
        const { email }= req.body;
        if(!email) throw new Error("Email  is missing");
        
        //call the nodemailer
        eventEmitter.emit("signup",email);
        res.json({msg:"User Registered in successfully"});
 
    } 
    catch (e){
        next(e);

    }
})
router.post("/login", (req,res,next)=>{
    try{     
       const {email,password}=req.body;
       if(!email || !password) throw new Error("Email or password is missing")
       if(email === "nabin@gmail.com" && password ==="1234"){
        //generate token
        const payload = { email, role: ["admin"] };
        const token = generateToken(payload);
        res.json({msg:"User logged in successfully", data:token});
       }
       res.json({msg:"User logged in successfully"});

    } catch(e){
        next(e);
    }

})

router.get("/",(req,res,next)=>{
    try{
        res.json({msg:"User list generated successfully...",data:[]});
    }catch(e)
    {next(e);

    }
})

module.exports=router;

/*
register
login
forget password
reset password
change password
delete account
verify password
update user
get one user
list users
update my profile

*/