const express = require('express');
const router = express.Router();
const cors = require('cors');
const { test,handleRegister,handleLogin,handleLogout,verifyUser } = require('../controllers/authController')


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
router.get('/logout', handleLogout)
router.get('/user', verifyUser)






module.exports = router