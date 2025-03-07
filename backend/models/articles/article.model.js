
const { required, string } = require('joi');
const { model, Schema } = require('mongoose')

const articleSchema = new Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    // catrgory: { type: String, required: true },
    // image: { type: String, required: true },
    // comment: { type: String, required: true },
    author: { type: String, required: true },
    share: { type: Number, default: 0 },
    video: { type: String },
    audio: { type: String },
    contentLocation: { type: String },
    // contentRating: { type: String, required: true },
    views: { type: Number, default: 0 },

}, { timestamps: true });


module.exports = model("article", articleSchema);