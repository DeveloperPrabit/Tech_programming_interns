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
router.get('/:id/update-article', async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await articleController.update(id, req.body);
        res.json({ msg: "updated article", data: result })
        res.json({ msg: `update article.${id}` });
    } catch (err) {
        next(err)

    }
})
router.get('/:id/get-one-article', (req, res, next) => {
    try {
        const { id } = req.params;
        res.json({ msg: "get one article..." });
    } catch (err) {
        next(err)

    }
})
router.delete('/:id/delete-article', async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await articleController.delete(id)
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
// router.delete('/:id/seats',(req,res,next)=>{ //demo
//     try{
//         const {id}=req.params;
//         res.json({msg:"deleted one article..."});
//     } catch(err){
//         next(err)

//     }
// })


module.exports = router;