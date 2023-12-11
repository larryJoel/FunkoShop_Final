const express = require('express');
const router = express.Router();
const auth = require('../controllers/auth.controller.js')
router.get('/login',auth.login);
router.post('/login',auth.addLogin);
router.get('/register',auth.register);
router.post('/register',auth.addregister);



module.exports = router