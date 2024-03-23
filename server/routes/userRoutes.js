const express = require('express');
const router = express.Router();
const cors = require('cors');
const { test, handleRegister, handleLogin, handleLogout, checkAuth, isAdmin, handleGoogleLogin, fetchUser } = require('../controllers/authController');
const { createCampaign } = require('../controllers/campaignController');
const { addCategory,getCategory } = require('../controllers/categoryController');
// const { addUser, getUsers, getUser, updateUser, deleteUser } = require('../controllers/userController');

router.use(
    cors({
        origin: 'http://localhost:5173',
        credentials: true
    })
)



router.get('/profile', checkAuth, fetchUser);

module.exports = router;
