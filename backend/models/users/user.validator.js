
const Joi = require('joi');

const userSchema = Joi.object({
    name: Joi.string()
        .alphanum()
        .min(3)
        .max(30),
    // .required(),

    password: Joi.string().required(),
    // .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),

    // repeat_password: Joi.ref('password'),

    // access_token: [
    //     Joi.string(),
    //     Joi.number()
    // ],

    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com'] } })
        .required(),

    roles: Joi.array().items(Joi.string().valid("admin", "user")),
    image: Joi.string(),
    isEmailVerified: Joi.boolean(),
    isActive: Joi.boolean(),
})

const validator = async (req, res, next) => {
    try {
        await userSchema.validateAsync(req.body);
        next();
    } catch (e) {
        next(e);
    }
};
module.exports = { validator };
