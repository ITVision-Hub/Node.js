const Product = require('../models/product');
const mongodb = require('mongodb');

exports.getAddProduct = (req, res, next) => {
    console.log(req.user);
    res.render('admin/product-form.ejs', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        editing: false
    })
};

exports.postAddProduct = (req, res, next) => {

    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    const userId = req.user._id;
    const product = new Product(title, imageUrl, price, description, null, userId);
    product.save()
        .then(result => {
            console.log(result);
            res.redirect('/admin/products');
        })
        .catch(err => {
            console.log(err);
        });

}

exports.getProducts = (req, res, next) => {
    Product.fetchAll()
        .then(products => {
            res.render('admin/products.ejs', {
                pageTitle: 'Admin Products',
                path: 'admin/products',
                prods: products
            })
        })
        .catch(err => {
            console.log(err);
        });
}

exports.postDeleteProduct = (req, res, next) => {
    const prodId = req.body.productId;
    Product.deleteById(prodId)
        .then(() => {
            console.log('Successful deleted product');
            res.redirect('/admin/products');
        })
        .catch(err => {
            console.log(err);
        })
}

exports.getEditProduct = (req, res, next) => {
    const prodId = req.params.productId;
    const editMode = req.query.edit;
    Product.findById(prodId)
        .then(product => {
            res.render('admin/product-form', {
                pageTitle: 'Edit Product',
                path: '/admin/edit-product',
                product: product,
                editing: editMode
            });

        })
        .catch(err => {
            console.log(err);
        })
}
exports.postEditProduct = (req, res, next) => {
    const prodId = req.body.productId;
    const updatedTitle = req.body.title;
    const updatedImgaeUrl = req.body.imageUrl;
    const updatedPrice = req.body.price;
    const updatedDec = req.body.description;
    const updatedUserId = req.user._id;
    const product = new Product(updatedTitle, updatedImgaeUrl, updatedPrice, updatedDec, new mongodb.ObjectId(prodId), updatedUserId);
    product.save()
        .then(result => {
            console.log("Your updated is successful!")
            res.redirect('/admin/products')
        })
        .catch(err => {
            console.log(err);
        })
}