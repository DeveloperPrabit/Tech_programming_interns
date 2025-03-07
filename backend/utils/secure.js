const { verifyToken, checkRole } = require("./token");

const secureAPI = (sysROle) => {
    return (req, res, next) => {
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

            const validRole = checkRole({ sysROle, userRole: data?.roles || [] }, true);
            if (!validRole) throw new Error("User unauthorized");
            next();
        }
        catch (e) {
            next(e);
        }
    };
};

module.exports = { secureAPI };