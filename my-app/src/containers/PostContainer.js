import React, {Component} from 'react';
import { connect } from 'react-redux'
import { getSinglePost, deleteSinglePost, editSinglePost } from '../WebAPI'
import Post from '../components/post'
import * as actions from '../actions'

const PostContainer = props => {
    return <Post {...props} />
}

const mapStateToProps = state => {
    return {
        isLoadingSinglePost: state.getSinglePostReducer.isLoadinSinglePost,
        singlePostData: state.getSinglePostReducer.singlePostData,
        isEditing: state.editSinglePostReducer.isEditing,
        title: state.editSinglePostReducer.title,
        body: state.editSinglePostReducer.body
    }
}

const mapDispatchToProps = dispatch => {
    return {             
        getActiveSinglePost: (postId) => {
            dispatch(actions.getSinglePost())
            getSinglePost(postId).then(resp => {
                dispatch(actions.getSinglePostSuccess(resp.data))
            })
        },
        deleteActiveSinglePost: (postId) => {
            dispatch(actions.deleteSinglePost())
            deleteSinglePost(postId).then(resp => {
                dispatch(actions.deleteSinglePostSuccess())
            })
        },
        editActiveSinglePost: () => {
            dispatch(actions.editSinglePost())
        },
        editingActiveSinglePost: (title, body) => {
            dispatch(actions.editingSinglePost(title, body))
        },
        completeEditActiveSinglePost: (postId, title, body) => {
            editSinglePost(postId, title, body).then(resp => {
                dispatch(actions.getSinglePostSuccess(resp.data))
                dispatch(actions.editSinglePostSuccess())
            })
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(PostContainer)