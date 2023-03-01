const express=require('express');
const port=process.env.PORT || 5000;
const app=express();
const expressLayouts=require('express-ejs-layouts');

//Include database
require('./config/mongoose');

app.use(express.static('./assets'));
app.use(express.urlencoded({extended:true}));

app.use(expressLayouts);
//Extract style and scripts from sub pages into layout
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);


//Set up the view engine
app.set('view engine','ejs');
app.set('views','./views');

//Routes
app.use('/',require('./routes/index'));

app.listen(port,()=>{
    console.log(`App is listening on port ${port}`);
})