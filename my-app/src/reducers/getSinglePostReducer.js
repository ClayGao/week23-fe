import * as actionTypes from '../actionsTypes';

const initState = {
    singlePostData: [],
    isLoadingSinglePost: false,
}

const editingContent = {
    isEditing: false,
    title: '',
    body: ''
}

export function getSinglePostReducer(state = initState, action) {
    switch(action.type) {
        case actionTypes.GET_SINGLE_POST:
            return {
                ...state,
                isLoadingSinglePost: true,
            }
        case actionTypes.GET_SINGLE_POST_SUCCESS:
            return {
                ...state,
                singlePostData: action.data,
                isLoadingSinglePost: false  
            }
        default:
            return state
    }
}

export function editSinglePostReducer(state = editingContent, action) {
    switch(action.type) {
        case actionTypes.EDIT_SINGLE_POST:
            return {
                ...state,
                isEditing: true,
            }
        case actionTypes,actionTypes.EDITING_SINGLE_POST:
            return {
                ...state,
                title: action.title,
                body: action.body
            }
        case actionTypes.EDIT_SINGLE_POST_SUCCESS:
            return {
                ...state,
                isEditing: false  
            }
        default:
            return state
    }
}

export function deleteSinglePostReducer(state = initState, action) {
    switch(action.type) {
        case actionTypes.DELETE_SINGLE_POST:
            return {
                ...state,
                isLoadingSinglePost: true,
            }
        case actionTypes.DELETE_SINGLE_POST_SUCCESS:
            return {
                ...state,
                isLoadingSinglePost: false  
            }
        default:
            return state
    }
}