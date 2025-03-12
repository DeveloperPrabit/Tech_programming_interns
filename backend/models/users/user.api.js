const router = require("express").Router();
// const { mw } = require("../../utils/checkRole");
const userContoller = require("./user.controller");
// const { generateToken, verifyToken } = require("../../utils/token");
const { secureAPI } = require("../../utils/secure");
const { validator } = require("./user.validator.js");
const user = require("./user.model.js");
// const {sendMail} =require('../../services/mailer');
// const mw=(req,res,next)=>{ //route level middleware
//     const {username,password}=req.headers;
//     if(username === "ff" && password === ""){
//         next();
//     }
//     res.status(404).json({msg:"user unauthorized"});
// }

// router.get("/", mw, (req, res, next) => {
//     try {
//         res.json({ msg: "user API is working" });
//     } catch (e) {
//         next(e);
//     }
// });

router.post("/register", validator, async (req, res, next) => {
    try {

        const result = await userContoller.create(req.body);
        // if(!email) throw new Error("Email  is missing"); //not required as we have already validated

        res.json({ msg: "User Registered in successfully", data: result });
    } catch (e) {
        next(e);
    }

});
router.post("/login", async (req, res, next) => {
    try {
        const result = await userContoller.login(req.body);
        res.json({ msg: "User logged in successfully", data: result });
    } catch (e) {
        next(e);
    }
});

router.post("/verify-email-token", async (req, res, next) => {
    try {
        const result = await userContoller.verifyEmailToken(req.body);
        res.json({ msg: "Email successfully verified", result: result });
    } catch (e) {
        next(e);
    }
});
router.post("/generate-otp", (req, res, next) => {
    try {
        const result = userContoller.generateOtpToken(req.body);
        res.json({ msg: "OTP sent successfully", result: result });
    } catch (e) {
        next(e);
    }
});


router.get("/list", secureAPI(["admin"]), async (req, res, next) => {
    try {
        const data = await userContoller.list(); // login garea headers mah token pani pathune

        res.json({ msg: "User list generated successfully...", data: [] });
    } catch (e) {
        next(e);
    }
});

router.patch("/:id/block", secureAPI(["admin"]), async (req, res, next) => {
    try {
        const payload = req.params.id;
        const result = await userContoller.blocKUser(payload);
        res.json({ msg: "User blocked successfully", data: result });


    } catch (e) {
        next(e)
    }
})
router.delete("/:id", async (req, res, next) => { //working
    try {
        const result = await userContoller.removeById(req.params.id);
        res.json({ msg: "User Deleted successfully", data: result });

    } catch (e) {
        next(e)
    }
})
router.get("/profile", secureAPI(), async (req, res, next) => {
    try {
        const result = await userContoller.getProfile(req.currentUser);
        res.json({ msg: "User profile generated successfully", data: result });
    } catch (e) {
        next(e)
    }
})
router.put("/profile", secureAPI(), async (req, res, next) => {
    try {
        const result = await userContoller.updateProfile(req.currentUser, req.body);
        res.json({ msg: "Profile updated successfully", data: result });

    } catch (e) {
        next(e)
    }
})

router.get("/:id", secureAPI(["admin"]), async (req, res, next) => {
    try {

        const result = await userContoller.getById(req.params.id);
        res.json({ msg: "User details generated.", data: result });
    } catch (e) {
        next(e)
    }
})

router.post("/change-password", secureAPI(["admin", "user"]), async (req, res, next) => {
    try {
        const result = await userContoller.changePassword(
            req.currentUser,
            req.body
        );
        res.json({ msg: "Password changed successfully", data: result });

    } catch (e) {
        next(e)
    }
})
router.post("/reset-password", secureAPI(["admin"]), validator, async (req, res, next) => {
    try {
        const { id, newPassword } = req.body;
        if (!id || !newPassword) throw new Error("Id or newPassword is missing");
        const result = await userContoller.resetPassword(id, newPassword);
        res.json({ msg: "Password reset successfully", data: result });

    } catch (e) {
        next(e)
    }
})

router.post("/forget-password", async (req, res, next) => {
    try {
        const result = await userContoller.forgetPasswordTOkenGen(req.body);
        res.json({ msg: "Forget password token generated successfully", data: result });

    } catch (e) {
        next(e)
    }
})
router.post("/forget-password-change", async (req, res, next) => {
    try {
        const result = await userContoller.forgetPasswordPassChange(req.body);
        res.json({ msg: "New Password change successfully", data: result });

    } catch (e) {
        next(e)
    }
})
module.exports = router;

/*
register
login
forget password
reset password
change password
delete account
verify password
update user
get one user
list users
update my profile

*/
