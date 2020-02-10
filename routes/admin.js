const express = require('express');

const router = express.Router();

const adminController = require('../controllers/admin');
//Add Product GET
router.get('/add-product', adminController.getAddProduct);

//Add Product GET
router.post('/add-product', adminController.postAddProduct);

// Product List 
router.get('/products', adminController.getProducts);

module.exports = router;