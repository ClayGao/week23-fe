import axios from 'axios';

const url = 'https://qootest.com/posts'

export const getPosts = () => axios.get(url)

export const getSinglePost = (listId) => axios.get(url + '/' + listId)

