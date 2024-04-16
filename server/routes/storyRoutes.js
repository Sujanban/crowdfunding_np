const express = require('express');
const router = express.Router();
const cors = require('cors');
const { updateStory } = require('../controllers/storyControlller');

router.use(
    cors({
        origin: 'http://localhost:5173',
        credentials: true
    })
)



router.post('/updateStory/:id',  updateStory);

module.exports = router;
