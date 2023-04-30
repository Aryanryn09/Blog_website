const express = require("express");
const Article = require("./../MARKDOWN-BLOG/models/articles")

const router = express.Router();
const app = express();
// app.set('view engine', 'ejs');

router.get('/new', (req, res)=>{
    res.render('articles/new', {article : new Article()})
})

router.post('/', (req, res)=>{
    
})

router.get('./:id', async (req, res)=>{
    // rome-ignore lint/style/useConst: <explanation>
const  article = await Article.findByI (req.params.id);
if(article == null){
    res.render('articles/show', {article : article } )
}
})
router.get('/new', (req, res)=>{
  res.render('articles/new', { article : new Article() })  
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