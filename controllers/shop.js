const Product = require('../models/product');

exports.getIndex = (req, res, next)=>{
    Product.fetchAll()
    .then(products=>{
        res.render('shop/index.ejs',{
            path:'/',
            pageTitle: 'Shop',
            prods: products
        })
    })
    .catch(err=>{
        console.log(err);
    })
}
exports.getProducts = (req, res, next)=>{
    Product.fetchAll()
    .then(products=>{
        res.render('shop/product-list.ejs',{
            path: '/products',
            pageTitle: 'Products',
            prods: products
        })
    })
    .catch(err=>{
        console.log(err);
    })
}

exports.getProduct = (req, res, next)=>{
    const prodId = req.params.productId;
    console.log("Using TypeOf"+typeof(prodId));
    Product.findById(prodId)
    .then(product=>{
        res.render('shop/product-detail.ejs',{
            pageTitle: 'Product Details',
            path: '/products',
            product: product
        })
    })
    .catch(err=>{
        console.log(err);
    })
}