const express = require('express');
const router = express.Router();
const cors = require('cors');
const {checkAuth} = require('../controllers/authController');

router.use(
    cors({
        origin: 'http://localhost:5173',
        credentials: true
    })
)



router.get('/profile', checkAuth);

module.exports = router;
