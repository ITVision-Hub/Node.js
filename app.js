const express = require('express');

const bodyParser = require('body-parser');
// const path = require('path');
const expressLayouts = require('express-ejs-layouts');

const mongoose = require('mongoose');
//import from models
const User = require('./models/user');

//Import from Route Module
const adminRoute = require('./routes/admin');
const shopRoute = require('./routes/shop');


const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));

//config express ejs layout
app.use(expressLayouts);
app.set('view engine', 'ejs');

app.use((req, res, next) => {
    User.findById("5e5e1d73fe0adb00b4bf87c6")
        .then(user => {
            req.user = user;
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

mongoose.connect('mongodb+srv://admin:onlineshoptesting123@onlineshop-pfdfx.mongodb.net/shop', { useNewUrlParser: true })
    .then(result => {
        User.findOne()
            .then(user => {
                if (!user) {
                    const user = new User({
                        name: 'john',
                        email: 'john@gmail.com',
                        cart: {
                            items: [

                            ]
                        }
                    })
                    user.save();
                }
            })
        console.log('Connected DB....');
        app.listen(3000)
    })
    .catch(err => {
        console.log(err);
    })
