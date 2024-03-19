const express = require('express');
const router = express.Router();
const cors = require('cors');
const { test,handleRegister } = require('../controllers/authController')


// middleware
router.use(
    cors({
        origin: 'http://localhost:5173',
        credentials: true
    })
)






router.get('/', test)
router.post('/register', handleRegister)









module.exports = router