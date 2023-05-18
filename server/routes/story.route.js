const express = require('express');
const { getStories ,createStory} = require('../controller/stories.controller');
const router = express.Router();

router.get('/', getStories);
router.post('/', createStory);


module.exports = router;
