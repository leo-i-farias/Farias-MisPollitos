const express = require('express');
const Route = require('../controllers/control');
const router = express.Router();

router.get('/', Route.renderHome);

router.get('/cart', Route.renderCart);

router.get('/product-name', Route.renderDetailProduct);

router.get('/log-in', Route.renderLogIn);

router.get('/register', Route.renderRegister);

module.exports = router;