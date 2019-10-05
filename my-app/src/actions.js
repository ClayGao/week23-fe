import * as actionTypes from './actionsTypes'

// Action creator
export const getPosts = () => ({
    type: actionTypes.GET_POSTS
})

export const getPostsSuccess = (data) => ({
    type: actionTypes.GET_POSTS_SUCCESS,
    data
})