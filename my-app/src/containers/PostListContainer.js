import React, {Component} from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import { getPosts } from '../WebAPI'
import PostList from '../components/post_list'
import * as actions from '../actions'

const PostListContainer = (props) => (
    <PostList {...props} />
)

const mapStateToProps = state => {
    return {
        isLoadingGetPosts: state.isLoadingGetPosts,
        postListData: state.postListData.data
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getPostList: () => {
            getPosts()
            .then(resp => {
                dispatch(actions.getPostsSuccess(resp.data))
            })
        }
    }
    
}





export default withRouter(connect( mapStateToProps, mapDispatchToProps )(PostListContainer)) 