import axios from 'axios';

const url = 'https://qootest.com/posts'

export const getPosts = () => axios.get(url)

export const getSinglePost = (listId) => axios.get(url + '/' + listId)

export const editSinglePost = (listId, title, body) => axios.get(url + '/' + listId,{ title, body })

export const deleteSinglePost = (listId) => axios.delete(url + '/' + listId)