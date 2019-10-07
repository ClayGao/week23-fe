import axios from 'axios';

const url = 'https://qootest.com/posts'

export const getPosts = () => axios.get(url)

export const getSinglePost = (listId) => axios.get(url + '/' + listId)

export const editSinglePost = (listId, title, body) => axios.patch(url + '/' + listId,{ title:title, body:body ,author:'xxxxx'})

export const deleteSinglePost = (listId) => axios.delete(url + '/' + listId)