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
    return res.status(404).send("This id doesn't belong to any story");
  }
  const updatedStory = await Story.findByIdAndUpdate(_id, story, { new: true });
  res.json(updatedStory);
};

const likeStory = async (req, res) => {
  const {id} = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("This id doesn't belong to any story");
  }
  const story = await Story.findById(id);
  const updatedStory = await Story.findByIdAndUpdate(id, {likes:story.likes+1}, { new: true });
  res.json(updatedStory);
};

const deleteStory = async (req, res) => {
  const { id } = req.params;
  const story = req.body;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("This id doesn't belong to any story");
  }
  await Story.findByIdAndDelete(id);
  res.json({message: "Story deleted Successfully!"});
};

module.exports = {getStories,createStory, updateStory, deleteStory, likeStory};