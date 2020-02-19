const express = require('express');
const router = express.Router();

const shopController = require('../controllers/shop');

router.get('/', shopController.getIndex);
router.get('/products', shopController.getProducts);

router.get('/products/:productId', shopController.getProduct);

//get cart =>GET
// router.get('/cart', shopController.getCart);
// //post cart
// router.post('/cart', shopController.postCart);

// router.get('/orders', shopController.getOrders);

module.exports = router;