const express = require('express');
const router =  express.Router();
const adminController = require('../controllers/adm.Controller.js')

router.get('/admin',adminController.admin);
router.get('/view',adminController.view);
router.post('/create',adminController.create);
router.get('/edit',adminController.editview);
router.post('/edit',adminController.edit);
router.delete('/delete',adminController.delete);

module.exports = router
