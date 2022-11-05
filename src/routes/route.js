const express = require('express');
const Route = require('../controllers/renders');
const Controller = require('../controllers/control');
const router = express.Router();

router.get('/', Route.renderHome);

router.get('/cart', Route.renderCart);

router.get('/product/:id', Controller.viewProduct);

router.get('/log-in', Route.renderLogIn);
router.post('/login', Controller.login);
router.get('/logout', Controller.logout);

router.get('/register', Route.renderRegister);
router.post('/register', Controller.newUser);

module.exports = router;