const express = require('express')
const app = express()
app.set('views','views');
app.set('view engine', 'ejs');

app.get('/',(req,res)=>res.render('Home.ejs'))


app.listen(3000)


