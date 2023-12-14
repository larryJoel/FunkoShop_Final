const express = require('express');
const router = express.Router();
const mainControllers = require('../controllers/main.controller.js')

router.get('/',mainControllers.home);
router.get('/all',mainControllers.productsAll);
router.get('/collection/:miParametro', mainControllers.collection)
router.get('/detail/:funko',mainControllers.detail);
router.get('/contact',mainControllers.contact);
router.get('/about',mainControllers.about);
router.get('/faqs',mainControllers.faqs);

module.exports = router