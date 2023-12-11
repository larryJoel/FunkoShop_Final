const express = require('express');
const router = express.Router();
const shop = require('../controllers/shop.controller.js');

router.get('/item/:id',shop.item);
router.post('/item/:id/add',shop.additem);
router.get('/cart',shop.cart);
router.post('/cart',shop.addcart);


module.exports = router