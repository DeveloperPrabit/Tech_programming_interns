const JWT =require('jsonwebtoken');

const generateToken=(payload)=>{
    JWT.sign(
        {
            data:payload,
        },
        process.env.JWT_SECRET,
        {expiresIN:process.env.JWT_DURATION}
    )

};

const verifyToken=(token) => JWT.verify(token, process.env.JWT_SECRET)

module.exports= {generateToken ,verifyToken};