/** 
 create article
 update article
    delete article
    list articles
    get one article
    change the resease date article

 */

    const router=require('express').Router();


    router.post('/login',(req,res,next)=>{
        try{
            res.json({msg:"created new article..."});
        } catch(err){
            next(err)

        }
    })
    router.get('/login',(req,res,next)=>{
        try{
            res.json({msg:"List all article..."});
        } catch(err){
            next(err)

        }
    })
    router.get('/:id',(req,res,next)=>{
        try{
            const {id}=req.params;
            res.json({msg:"get one article..."});
        } catch(err){
            next(err)

        }
    })
    router.delete('/:id',(req,res,next)=>{
        try{
            const {id}=req.params;
            res.json({msg:"deleted one article..."});
        } catch(err){
            next(err)

        }
    })
    router.get('/:id',(req,res,next)=>{
        try{
            const {id}=req.params;
            res.json({msg:"Read one article..."});
        } catch(err){
            next(err)

        }
    })
    router.put('/:id',(req,res,next)=>{
        try{
            const {id}=req.params;
            res.json({msg:"update one article..."});
        } catch(err){
            next(err)

        }
    })
    
    router.patch('/:id/release-date',(req,res,next)=>{
        try{
            const {id}=req.params;
            res.json({msg:"release date one article..."});
        } catch(err){
            next(err)

        }
    })
    // router.delete('/:id/seats',(req,res,next)=>{ //demo
    //     try{
    //         const {id}=req.params;
    //         res.json({msg:"deleted one article..."});
    //     } catch(err){
    //         next(err)

    //     }
    // })


    module.exports = router;