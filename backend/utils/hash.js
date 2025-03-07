const bcrypt = require('bcrypt');
// const { number } = require('joi');

const genHash = (payload) => {
    return bcrypt.hashSync(payload, Number(process.env.SALT_ROUND));
};

const compareHash = (hashPayload, payload) => {
    return bcrypt.compareSync(payload, hashPayload);
};

module.exports = { genHash, compareHash };