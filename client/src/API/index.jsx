import axios from 'axios';  

const url = "http://localhost:5000/stories";

export const fetchStories = async() => axios.get(url);
export const createStories = async(story) => axios.post(url, story);