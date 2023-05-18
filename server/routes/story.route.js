const express = require('express');
const { getStories } = require('../controller/stories.controller');
const router = express.Router();

router.get('/', getStories);


module.exports = router;
