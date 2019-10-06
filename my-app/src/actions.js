import * as actionTypes from './actionsTypes'

// Action creator
export const getPosts = () => ({
    type: actionTypes.GET_POSTS
})

export const getPostsSuccess = (data) => ({
    type: actionTypes.GET_POSTS_SUCCESS,
    data
})

export const getSinglePost = () => ({
    type: actionTypes.GET_SINGLE_POST
})

export const getSinglePostSuccess = (data) => ({
    type: actionTypes.GET_SINGLE_POST_SUCCESS,
    data
})

export const deleteSinglePost = () => ({
    type: actionTypes.DELETE_SINGLE_POST
})

export const deleteSinglePostSuccess = () => ({
    type: actionTypes.DELETE_SINGLE_POST_SUCCESS,
})

export const editSinglePost = () => ({
    type: actionTypes.EDIT_SINGLE_POST
})

export const editingSinglePost = (title, body) => ({
    type: actionTypes.EDITING_SINGLE_POST,
    title,
    body
})

export const editSinglePostSuccess = () => ({
    type: actionTypes.EDIT_SINGLE_POST_SUCCESS
})