const express = require('express');

const bodyParser = require('body-parser');
// const path = require('path');
const expressLayouts = require('express-ejs-layouts');
//Import from Route Module
const adminRoute = require('./routes/admin');
const shopRoute = require('./routes/shop');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));

//config express ejs layout
app.use(expressLayouts);
app.set('view engine', 'ejs');

app.use('/admin', adminRoute);
app.use('/', shopRoute);

app.use((req, res, next) => {
    res.render('404.ejs', {
        pageTitle: 'Page Not Found',
        path: ' '
    });
});
app.listen(3000);