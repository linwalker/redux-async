/**
 * Created by linyuhua on 2017/3/7.
 */
import {combineReducers} from 'redux';
import {
    SELECT_REDDIT,
    RECEIVE_POSTS
} from '../constants/ActionTypes';

const selectedReddit = (state = 'reactjs',action) => {
    switch (action.type) {
        case SELECT_REDDIT:
            return action.reddit;
        default:return state;
    }
}

const receivePosts = (state = {items:[]},action) => {
    switch(action.type) {
        case RECEIVE_POSTS:
            return {
                ...state,
                items:action.posts
            }
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    selectedReddit,
    receivePosts
})

export default rootReducer;