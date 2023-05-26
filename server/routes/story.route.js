const express = require('express');
const { getStories ,createStory,updateStory} = require('../controller/stories.controller.js');
const router = express.Router();

router.get('/', getStories);
router.post('/', createStory);
router.patch('/:id', updateStory);


module.exports = router;
