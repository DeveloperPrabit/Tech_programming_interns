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
    // eventEmitter.emit("signup", email);
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

        // eventEmitter.emit("emailVerification", email, otp); //incomplete
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

const updateById = (id, payload) => {

    return userModel.findOneAndUpdate({ _id: id }, payload, { new: true });//naya data back din eho vaneko ho yo new:true vaneko.
};
const getProfile = (_id) => {
    return userModel.findOne({ _id });
}

const removeById = (id) => {
    return userModel.deleteOne({ _id: id });
};

const updateProfile = (_id, payload) => { };

const changePassword = async (id, payload) => {
    //get old password the user
    const user = await userModel.findOne({
        _id: id,
        isActive: true,
        isEmailVerified: true,
    }).select("+password");
    if (!user) throw new Error("User not found");
    //comapre that password to usert database
    const isValidPw = compareHash(user?.password, oldPassword);
    if (!isValidPw) throw new Error("Password mismatch");
    //convert newPassword to hashPassword
    const data = {
        password: genHash(newPassword),
    };
    //store that password in database

    return userModel.updateOne({ _id: id }, payload);
};

const resetPassword = async (id, newPassword) => {

    //user exists
    const user = await userModel.findOne({ _id: id });
    if (!user) throw new Error("User not found");
    //new password hash
    const hashPw = genHash(payload?.newPassword);
    //user update
    return userModel.updateOne({ _id: id }, { password: hashPw });
}

const forgetPasswordTOkenGen = async (payload) => { //work
    const { email } = payload;
    //find user
    const user = await userModel.findOne({
        email,
        isActive: true,
        isEmailVerified: true,
    });
    if (!user) throw new Error("User not found");
    //generate token for reset password
    const otp = generateOtp();
    console.log({ otp });
    //store token in database
    const updatedUser = await userModel.updateOne({ email }, { otp });
    if (!updatedUser) throw new Error("User not found");
    //send token to user email
    // eventEmitter.emit("Email verification", email, otp);
    return true;
}

const forgetPasswordPassChange = async (payload) => { //work
    const { email, otp, newPassword } = payload;
    //find user
    const user = await userModel.findOne({
        email,
        isActive: true,
        isEmailVerified: true,
        otp,
    });
    if (!user) throw new Error("User not found");
    if (otp !== user?.otp) throw new Error("OTP mismatch");
    const hashPw = genHash(newPassword);
    const updatedUser = await userModel.updateOne({ email }, { password: hashPw, otp: "" });
    if (!updatedUser) throw new Error("Something went wrong");
    return true;
}

module.exports = {
    create,
    login,
    verifyEmailToken,
    generateOtpToken,
    getById,
    list,
    blocKUser,
    getProfile,
    updateById,
    removeById,
    updateProfile,
    changePassword,
    resetPassword,
    forgetPasswordTOkenGen,
    forgetPasswordPassChange

}
