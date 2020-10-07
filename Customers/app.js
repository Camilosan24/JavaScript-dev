const express = require('express');
const bodyParser = require('body-parser');
const router = require('./src/routes/index');
const path = require('path');

const app = express();


app.set('view engine','ejs');
app.set('views', './src/views');
app.set('port',4000);
app.use(express.static(path.join(__dirname,'src','views','public')));
app.use(bodyParser.urlencoded({extended:false}));
app.use(router);


app.listen(app.get('port'),()=>{
    console.log('Server on port', app.get('port'));
});