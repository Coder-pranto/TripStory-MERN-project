import axios from 'axios';  

const url = "http://localhost:5000/stories";

export const fetchStories = async() => axios.get(url);
export const createStories = async(story) => axios.post(url, story);
export const updateStories = async(id,story) => axios.patch(`${url}/${id}`, story);
export const likeStories = async(id) => axios.patch(`${url}/${id}/likeStory`);
export const deleteStories = async(id,story) => axios.delete(`${url}/${id}`);