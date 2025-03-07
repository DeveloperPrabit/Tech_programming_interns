/** 
 create article
 update article
    delete article
    list articles
    get one article
    change the resease date article

 */

const router = require('express').Router();
const articleController = require('./article.controller');


router.post('/create-article', async (req, res, next) => {
    try {
        //multer logic here
        const result = await articleController.create(req.body);
        res.json({ msg: "created new article...", data: result });
    } catch (err) {
        next(err)

    }
})
router.put('/update-article/:id', async (req, res, next) => {
    try {
        const { id } = req.params;  // Get the id from route params
        const result = await articleController.updateOneArticle(req, res, next);
        // No need to send another response here, since the controller already responds
    } catch (err) {
        next(err);  // Pass the error to the error handler
    }
})
router.get('/get-one-article/:id', (req, res, next) => {
    try {
        const { id } = req.params;
        res.json({ msg: "get one article..." });
    } catch (err) {
        next(err)

    }
})
router.delete('/delete-one-article/:id', async (req, res, next) => {
    try {
        // const { id } = req.params;
        const result = await articleController.deleteOneArticle(req, res, next)
        res.json({ msg: "deleted one article...", data: result });
    } catch (err) {
        next(err)

    }
})
router.get('/:id', (req, res, next) => {
    try {
        const { id } = req.params;
        res.json({ msg: "Read one article..." });
    } catch (err) {
        next(err)

    }
})
router.put('/:id/get-all-article', (req, res, next) => {
    try {
        const { id } = req.params;
        res.json({ msg: "get all article..." });
    } catch (err) {
        next(err)

    }
})

router.patch('/:id/release-date', (req, res, next) => {
    try {
        const { id } = req.params;
        res.json({ msg: "release date one article..." });
    } catch (err) {
        next(err)

    }
})


module.exports = router;