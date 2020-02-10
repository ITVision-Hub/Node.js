const Product = require('../models/product');

exports.getIndex = (req, res, next) => {
    Product.fetchAll((cb) => {
        res.render('shop/index.ejs', {
            pageTitle: 'Shop',
            path: '/',
            prods: cb
        });
    });

}

exports.getProducts = (req, res, next) => {
    Product.fetchAll((cb) => {
        res.render('shop/product-list.ejs', {
            pageTitle: 'All Products',
            path: '/products',
            prods: cb
        });
    });

}

exports.getProduct = (req, res, next) => {
    const prodId = req.params.productId;
    Product.findById(prodId, cb => {
        res.render('shop/product-detail.ejs', {
            pageTitle: "Product Details",
            path: '/products',
            product: cb
        })
    })
}

exports.getCarts = (req, res, next) => {
    res.render('shop/cart.ejs', {
        pageTitle: 'Your Cart',
        path: '/cart'
    });
}
exports.getOrders = (req, res, next) => {
    res.render('shop/orders.ejs', {
        pageTitle: 'Your Orders',
        path: '/orders'
    });
}