const express = require("express");
const router = express.Router();
const app = express();
// app.set('view engine', 'ejs');

router.get('/new',(req, res)=>{
    res.render('articles/new')
})

module.exports = router