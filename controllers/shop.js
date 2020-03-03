const Product = require('../models/product');

exports.getIndex = (req, res, next) => {
    Product.find()
        .then(products => {
            res.render('shop/index.ejs', {
                path: '/',
                pageTitle: 'Shop',
                prods: products
            })
        })
        .catch(err => {
            console.log(err);
        })
}
exports.getProducts = (req, res, next) => {
    Product.find()
        .then(products => {
            res.render('shop/product-list.ejs', {
                path: '/products',
                pageTitle: 'Products',
                prods: products
            })
        })
        .catch(err => {
            console.log(err);
        })
}

exports.getProduct = (req, res, next) => {
    const prodId = req.params.productId;
    Product.findById(prodId)
        .then(product => {
            res.render('shop/product-detail.ejs', {
                pageTitle: 'Product Details',
                path: '/products',
                product: product
            })
        })
        .catch(err => {
            console.log(err);
        })
}

// exports.getCart = (req, res, next) => {
//     req.user.getCart()
//         .then(products => {
//             res.render('shop/cart.ejs', {
//                 pageTitle: 'Your Cart',
//                 path: '/cart',
//                 prods: products
//             })
//         })
//         .catch(err => {
//             console.log(err);
//         })

// }
// exports.postCart = (req, res, next) => {
//     const productId = req.body.productId;
//     Product.findById(productId)
//         .then(product => {
//             return req.user.addToCart(product)
//         })
//         .then(result => {
//             //console.log(result);
//             res.redirect('/');
//         })
// }

// exports.postDeleteCartItem = (req, res, next) => {
//     const prodId = req.body.prdocuctId
//     console.log(prodId);
//     req.user.deleteCartItem(prodId);
//     res.redirect('/cart');
// }
// exports.postOrders = (req, res, next) => {
//     req.user.addOrder()
//         .then(result => {
//             res.redirect('/cart');
//         })
//         .catch(err => {
//             console.log(err);
//         })
// }
