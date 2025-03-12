const { verifyToken, checkRole } = require("./token");
const userModel = require("../models/users/user.model");

const secureAPI = (sysROle = []) => {
    return async (req, res, next) => {
        try {
            const { access_token } = req.headers;
            //what to do if no token
            if (!access_token) throw new Error("Token is missing.");
            //check the token is vaild or not
            const isValid = verifyToken(access_token);
            //if token is expired
            if (!isValid) throw new Error("Token Expired.");
            const { data } = isValid;
            console.log({ isValid });

            //check user email with database
            const userInfo = await userModel.findOne({
                email: data?.email,
                isActive: true,
                isEmailVerified: true
            });
            if (!userInfo) throw new Error({ msg: "User not found" });

            //RBAC vs PBAC vs ABAC
            const validRole = checkRole({ sysROle, userRole: userInfo?.role || [] });
            if (!validRole) throw new Error("User unauthorized");
            req.currentUser = userInfo?._id;
            next();
        }
        catch (e) {
            next(e);
        }
    };
};

module.exports = { secureAPI };