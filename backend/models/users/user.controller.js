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
    //call the nodemailer
    eventEmitter.emit("signup", email);
    return result;
};
const login = async (payload) => {
    const { email, password } = payload;
    //check email
    const user = await userModel.findOne({ email, isActive: true }).select("+password");
    if (!user) throw new Error("User not found");
    const isVerified = user?.isEmailVerified;
    if (!isVerified) throw new Error("Email verification required");
    const isValidPw = compareHash(user?.password, password);
    // console.log({ password });

    if (!isValidPw) throw new Error("Email or password invalid");

    const tokenPayload = {
        name: user?.name,
        email: user?.email,
        roles: user?.roles
    };
    const token = generateToken(tokenPayload);
    if (!token) throw new Error("Something went wrong");
    return token; //yo garda token dinxa 

}

const generateOtpToken = async (payload) => { //if user aaja verify nagare paxi pani garxa sakxa so xutai logic introduce gareko. jata jata password khalunuparax teta +password garne
    const { email } = payload;
    const user = await userModel.findOne({ email, isActive: true });
    if (!user) throw new Error("User not found");
    const isVerified = user?.isEmailVerified;
    if (!isVerified) {
        const otp = generateOtp();
        console.log({ otp });

        const updateduser = await userModel.updateOne({ _id: user?.id }, { otp });
        if (!updateduser) throw new Error("Something went wrong");

        eventEmitter.emit("emailVerification", email, otp); //incomplete
    }
    return true;

};
// for verifying otp 
const verifyEmailToken = async (payload) => {
    const { email, token } = payload;
    const user = await userModel.findOne({ email, isActive: true });
    if (!user) throw new Error("User not found");
    const isTokenValid = user?.otp === token; // db ko otp ra user le enter gareko otp compare gareko
    if (!isTokenValid) throw new Error("Token mismatch");
    const result = await userModel.updateOne(
        { _id: user?.id },
        { isEmailVerified: true, otp: "" });
    console.log({ result });

    if (!result) throw new Error("Something went wrong");
    return true;

};

const getById = (id) => { };

//not work
const list = async () => {

    const users = await userModel.find();  // yata direct list garda password ne aauxa so teslai solve garna db model mah gara select:false garne ra login mah gara antim mah +password garne.


};

//working
const blocKUser = async (payload) => { // yasma paila token ra id pathayera block gare paxi login hudina user not found vanxa fare block mah click gare paxi unblock hunxa ra login hunxa.
    const { id } = payload;
    const user = await userModel.findOne({ _id: payload }); //yata _id:id rakhne hoina payload rakhne.
    if (!user) throw new Error("User not found");
    const statusPayload = {
        isActive: !user?.isActive, // if block unblock unblock block.
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
