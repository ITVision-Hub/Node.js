const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.render('admin/add-product.ejs', {
        pageTitle: 'Add Product',
        path: '/admin/add-product'
    })
};

exports.postAddProduct = (req, res, next) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    const product = new Product(title, imageUrl, price, description);
    product.save()
        .then(result => {
            console.log(result);
        })
        .catch(err => {
            console.log(err);
        });
    res.redirect('/admin/add-product');
}

exports.getProducts = (req, res, next)=>{
    Product.fetchAll()
    .then(products=>{
        res.render('admin/products.ejs', {
            pageTitle: 'Admin Products',
            path: 'admin/products',
            prods: products
        })
    })
    .catch(err=>{
        console.log(err);
    });
}
