const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const counserlerRoute = require('./contoller/news.route'); 



let port = 5000;
const app = express();

app.use(cors());


app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({extended: false}));






 app.use('/news', counserlerRoute);

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});



