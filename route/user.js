const express = require('express');

const router  = express.Router()
const { registerController, loginController} = require('../controller/userController');
const { verifyToken } = require('../model/jwt');

router.post('/register', verifyToken, registerController);
router.post('/login', loginController);

module.exports = router;