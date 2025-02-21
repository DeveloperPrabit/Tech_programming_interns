
const Joi=require('joi');

const userSchema = Joi.object({
    username: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),

    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),

    repeat_password: Joi.ref('password'),

    access_token: [
        Joi.string(),
        Joi.number()
    ],

    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'com.np'] } }),
 
      //update code in git
})

const validator=(email)=>{
    try {
        const value = schema.validateAsync({ email: 'abc'});
    }
    catch (err) { }
};
