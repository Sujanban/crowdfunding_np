const express = require('express');
const router = express.Router();
const cors = require('cors');
const { test,handleRegister,handleLogin } = require('../controllers/authController')


// middleware
router.use(
    cors({
        origin: 'http://localhost:5173',
        credentials: true
    })
)






router.get('/', test)
router.post('/register', handleRegister)
router.post('/login', handleLogin)









module.exports = router