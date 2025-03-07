
const articleModel = require('./article.model');


const create = async (payload) => {
    // try {
    //     const alreadyPost = await articleModel.findById(payload.id);
    //     if (alreadyPost) throw new Error("Article already exist.");
    //     if (!alreadyPost) {
    //         const newArticle = new articleModel(payload);
    //         const result = await newArticle.save();
    //         return result;
    //     }

    // }
    // catch (err) {
    //     next(err);
    // }
    // try {
    const { title, content, author } = payload;

    // Check if the article already exists by title
    const alreadyPost = await articleModel.findOne({ title });
    if (alreadyPost) return res.status(400).json({ message: "Article already exists." });

    // Create new article
    const newArticle = new articleModel({ title, content, author });
    const result = await newArticle.save();

    // return res.status(201).json({ message: "Article created successfully", article: result });

    // } catch (err) {
    //     return res.status(500).json({ error: err.message });
    // }
}

const updateOneArticle = async (req, res) => {

    try {
        const { id } = req.params;  // Access the id from route params
        const updateArticle = await articleModel.findByIdAndUpdate(id, req.body, { new: true });

        if (!updateArticle) throw new Error("Article not found.");

        res.json({ msg: "Article updated successfully.", data: updateArticle });
    } catch (err) {
        next(err);  // Pass the error to the error handler middleware
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
        const { id } = req.params;
        const deleteArticle = await articleModel.findByIdAndDelete(req.params.id);
        if (!deleteArticle) throw new Error("Article not found.");
        res.json({ msg: `This ${id} one article has been deleted.` })
    }
    catch (err) {
        next(err);
    }
}

module.exports = { create, updateOneArticle, getOneArticle, getAllArticle, deleteOneArticle };