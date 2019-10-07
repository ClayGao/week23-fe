import { combineReducers } from 'redux';
import getPostsReducer from './getPostsReducer'
import { getSinglePostReducer, editSinglePostReducer} from './getSinglePostReducer'

const blogApp = combineReducers({
    getPostsReducer,
    getSinglePostReducer,
    editSinglePostReducer,
});

export default blogApp;