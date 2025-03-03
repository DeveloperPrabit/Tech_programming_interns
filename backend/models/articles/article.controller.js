
const articleModel = require('./article.model');


const create = async (payload) => {
    try {
        const alreadyPost = await articleModel.findById(payload.id);
        if (alreadyPost) throw new Error("Article already exist.");
        if (!alreadyPost) {
            const newArticle = new articleModel(payload);
            const result = await newArticle.save();
            return result;
        }

    }
    catch (err) {
        next(err);
    }
}

const updateOneArticle = async (req, res) => {
    try {
        const updateArticle = await articleModel.findById(req.para, s.id, req, body, { new: true });
        if (!updateArticle) throw new Error("Article not found.");
        res.json({ msg: "Article updated successfully.", data: updateArticle });

    }
    catch (err) {
        next(err);
    }
}

const getOneArticle = async (payload, id) => {
    try {
        const oneArticle = await articleModel.findById().populate("author", "category");
        if (!oneArticle) throw new Error("Article not found.");
        res.json({ msg: "Article fetched successfully.", data: oneArticle });


    }
    catch (err) {
        next(err);
    }
}

const getAllArticle = async (payload, id) => {
    try {
        const allArticles = await articleModel.find().populate("autor", "category");
        if (!allArticles) throw new Error("No article found.");
        res.json({ msg: "All articles fetched successfully.", data: allArticles });

    }
    catch (err) {
        next(err);
    }
}

const deleteOneArticle = async (req, res, next) => {
    try {
        const deleteArticle = await articleModel.findById(req.params.id);
        if (!deleteArticle) throw new Error("Article not found.");
        if (deleteArticle) {
            const result = await articleModel.findByIdAndDelete(req.params.id);
            res.json({ msg: "Article deleted successfully.", data: result });
        }
    }
    catch (err) {
        next(err);
    }
}

module.exports = { create };