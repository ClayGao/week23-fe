import { combineReducers } from 'redux';
import getPostsReducer from './getPostsReducer'
import { getSinglePostReducer,  deleteSinglePostReducer, editSinglePostReducer} from './getSinglePostReducer'

const blogApp = combineReducers({
    getPostsReducer,
    getSinglePostReducer,
    editSinglePostReducer,
    deleteSinglePostReducer
});

export default blogApp;