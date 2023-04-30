const express = require("express");
const Article = require("./../MARKDOWN-BLOG/models/articles")

const router = express.Router();
const app = express();
// app.set('view engine', 'ejs');

router.get('/new', (req, res)=>{
    res.render('articles/new')
})


router.get('./:id', (req, res)=>{

})



router.post('/', async (req, res )=>{
    const article = new Article({
        title : req.body.title,
        description : req.body.description,
        markdown : req.body.markdown,
    })
    try{
    articles = await article.save();
    res.redirect(`/articles/${articles.id}`)
    }catch(e){
        res.send('articles/new', {article : article})
    }
})
module.exports = router;