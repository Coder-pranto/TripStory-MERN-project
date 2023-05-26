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


const updateStory = async (req, res) => {
  const { id: _id } = req.params;
  const story = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("this id doesn't belong to any story");
  }
  const updatedStory = await Story.findByIdAndUpdate(_id, story, { new: true });
  res.json(updatedStory);
};

module.exports = {getStories,createStory, updateStory};