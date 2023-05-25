const { default: mongoose } = require("mongoose");
const Story = require("../model/storyContent.schema.js");

const getStories = async(req, res) => {
    try {
        const stories = await Story.find();
        res.status(200).json(stories);  
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

const createStory = async (req, res) => {
  const body = req.body;
  const newStory = new Story({
    ...body,
  });
  try {
    await newStory.save();
    res.status(201).json(newStory);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};


module.exports = {getStories,createStory};