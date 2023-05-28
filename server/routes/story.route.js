const express = require('express');
const { getStories ,createStory,updateStory, deleteStory, likeStory} = require('../controller/stories.controller.js');
const router = express.Router();

router.get('/', getStories);
router.post('/', createStory);
router.patch('/:id', updateStory);
router.delete('/:id', deleteStory);
router.patch('/:id/likeStory', likeStory);


module.exports = router;
