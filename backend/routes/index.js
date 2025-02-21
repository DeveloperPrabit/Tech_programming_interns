// const { required } = require("joi");

const express =require('express');
const router = express.Router();



const userRouter=require('../models/users/user.api');
const articleRouter=require('../models/articles/article.api');

router.get('/api/v1',(req,res,next)=>{
    try{
        res.json({msg:"News API is working"});
    } catch (e) {
        next(e);

    }
});

router.use('/api/v1/users',userRouter);
router.use('/api/v1/articles',articleRouter);

module.exports=router;