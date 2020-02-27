const express = require('express');

const bodyParser = require('body-parser');
// const path = require('path');
const expressLayouts = require('express-ejs-layouts');

//import from models
const User = require('./models/user');

//Import from Route Module
const adminRoute = require('./routes/admin');
const shopRoute = require('./routes/shop');


const mongoConnect = require('./util/database').mongoConnect;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));

//config express ejs layout
app.use(expressLayouts);
app.set('view engine', 'ejs');

app.use((req, res, next) => {
    User.findById("5e54d3781c9d4400000f8fae")
        .then(user => {
            req.user = new User(user.name, user.email, user.cart, user._id);
            //console.log(req.user)
            next();
        })
        .catch(err => {
            console.log(err);
        })
})

app.use('/admin', adminRoute);
app.use('/', shopRoute);

app.use((req, res, next) => {
    res.render('404.ejs', {
        pageTitle: 'Page Not Found',
        path: ' '
    });
});
mongoConnect(() => {
    app.listen(3000);
});