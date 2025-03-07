const { required, boolean } = require("joi");
// const mongoose = require('mongoose');
const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, select: false },
    role: [{
        type: String,
        enum: ["user", "admin"],
        default: "user",
        required: true
    }],
    image: { String },
    // isEmailVerified: { type: boolean, required: true }, //error this
    isActive: { type: Boolean, default: true },
    isEmailVerified: { type: Boolean, required: true, default: false },
    otp: { type: String },
},
    { timestamps: true }
);

module.exports = model("User", userSchema);