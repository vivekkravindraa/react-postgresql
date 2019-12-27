import * as ACTION_TYPES from '../actions/action_types';

const initialState = {
    posts: [],
    comments: []
}

const PostsReducer = (state = initialState, actions) => {
    switch(action.type) {
        case ACTION_TYPES.FETCH_DB_POSTS:
            return {
                ...state,
                posts: action.payload
            }
        case ACTION_TYPES.REMOVE_DB_POSTS:
            return {
                ...state,
                posts: []
            }
        case ACTION_TYPES.FETCH_POST_COMMENTS:
            return {
                ...state,
                profile: action.payload
            }
        case ACTION_TYPES.REMOVE_POST_COMMENTS:
            return {
                ...state,
                profile: null
            }
        default:
            return state;
    }
}

export default PostsReducer;