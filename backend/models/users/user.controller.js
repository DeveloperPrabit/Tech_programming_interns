// const router=require('router');
const event = require('events');
const userModel = require("./user.model");
const { genHash, compareHash } = require('../../utils/hash');
const { generateToken, generateOtp } = require("../../utils/token");

const { sendMail } = require("../../services/mailer");

const eventEmitter = new event.EventEmitter();
eventEmitter.addListener("signup", (email) => {
    sendMail({
        email,
        subject: "Welcome to our platform",
        htmlMsg: "<b>Thank you for signing news app </b>",
    })
});
eventEmitter.addListener("emailVerification", (email, otp) => {
    sendMail({
        email,
        subject: "News Email verification",
        htmlMsg: `<b>${otp}</b> is your otp token`,
    })
});

const create = async (payload) => {
    const { email, password } = payload;
    const duplicateEmail = await userModel.findOne({ email });
    if (duplicateEmail) throw new Error("Email already exists");
    payload.password = genHash(password);
    const result = await userModel.create(payload);

    return result;
};
const login = async (payload) => {
    const { email, password } = req.body;
    //check email
    const user = await userModel.findOne({ email, isActive: true }).select("+password");
    if (!user) throw new Error("User not found");
    const isVerified = user?.isEmailVerified;
    if (!isVerified) throw new Error("Email verification required");
    const isValidPw = compareHash(user?.password, password);
    if (!isValidPw) throw new Error("Email or password invalid");
    const tokenPayload = {
        name: user?.name,
        roles: user?.roles,
    };
    const token = generateToken(tokenPayload);
    if (!token) throw new Error("Something went wrong");

}
const verifyEmailToken = async (payload) => {
    const { email, token } = payload;
    const user = await userModel.findOne({ email, isActive: true });
    if (!user) throw new Error("User not found");
    const isTokenValid = user?.otp === token;
    if (!isTokenValid) throw new Error("Token mismatch");
    const result = await userModel.updateOne({ _id: user?.id }, { isEmailVerified: true, otp: "" });
    if (!result) throw new Error("Something went wrong");
    return true;

};

const generateOtpToken = async (payload) => {
    const { email } = payload;
    const user = await userModel.findOne({ email, isActive: true });
    if (!user) throw new Error("User not found");
    const isVerified = user?.isEmailVerified;
    if (!isVerified) {
        const otp = generateOtp();
        const updateduser = await userModel.updateOne({ _id: user?.id }, { otp });
        if (!updateduser) throw new Error("Something went wrong");

        eventEmitter.emit("emailVerification", email, otp);
    }
    return true;

};

const getById = (id) => { };

const list = async () => {
    const users = await userModel.find();

};

const blocKUser = async (payload) => {
    const { id } = payload;
    const user = await userModel.findOne({ _id: payload });
    if (!user) throw new Error("User not found");
    const statusPayload = {
        isActive: !user?.isActive,
    };
    const updateUser = await userModel.updateOne({ _id: payload }, statusPayload);
    if (!updateUser) throw new Error("Something went wrong");
    return true;
};

const updateById = (id, payload) => { };

const removeById = (id) => { };

module.exports = {
    create,
    login,
    verifyEmailToken,
    generateOtpToken,
    getById,
    list,
    blocKUser,
    updateById,
    removeById,


}
