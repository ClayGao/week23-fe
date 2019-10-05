import { combineReducers } from 'redux';
import getPostsReducer from './getPostsReducer'

const blogApp = combineReducers({
    getPostsReducer
});

export default blogApp;