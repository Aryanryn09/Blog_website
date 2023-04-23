const express = require("express");
const mongoose = require("mongoose")
const articleRouter = require('./routes/articles')
const app = express();

mongoose.connect('mongodb://localhost/blog',{
    useNewUrlParser :true, useUnifiedTopology: true
})


app.set('view engine', 'ejs');
//using articleRouter form articles
app.use('/articles',articleRouter);



app.get("/",(req, res)=>{

    const articles = [
        {
         title : "Test Articles",
         createdAt: Date.now(),
        description : "test description"
        
        },
        {
 title : "Test Articles2",
         createdAt: Date.now(),
        description : "test description2"
        },
        { title : "Test Articles3",
         createdAt: Date.now(),
        description : "test description3"

        }
    ]

    res.render('articles/index', { articles : articles});
})

app.listen(3000, ()=>{
    console.log("the app is listening on 3000");
})
