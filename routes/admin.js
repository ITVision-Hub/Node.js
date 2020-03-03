const express = require('express');

const router = express.Router();

const adminController = require('../controllers/admin');
//Add Product GET
router.get('/add-product', adminController.getAddProduct);

//Add Product POSt
router.post('/add-product', adminController.postAddProduct);

router.get('/products', adminController.getProducts);

router.post('/delete-product', adminController.postDeleteProduct);

router.get('/edit-product/:productId', adminController.getEditProduct);

router.post('/edit-product', adminController.postEditProduct);

module.exports = router;