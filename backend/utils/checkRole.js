
// const {email,password}=

const mw=(role)=>{  //middleware mah kashari headers rakhne.
    return (req,res,next)=>{ //route level middleware
        const {username,password}=req.headers;
        if(username === "ff" && password === ""){
            next();
        }
        res.status(404).json({msg:"user unauthorized"});
    }
}

module.exports= {mw};