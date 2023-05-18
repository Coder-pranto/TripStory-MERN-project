const Story = require("../model/storyContent.schema");



const getStories = async(req, res) => {
    try {
        const stories = await Story.find();
        res.status(200).json(stories);  
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

const createStory = async(req, res) => {
    try {
        const body = req.body;
        const newStory = new Story({
            ...body
        });

        await newStory.save();
        res.status(201).json(newStory);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}


module.exports = {getStories,createStory};