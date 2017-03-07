/**
 * Created by linyuhua on 2017/3/7.
 */
import {combineReducers} from 'redux';
import {
    SELECT_REDDIT,
    RECEIVE_POSTS,
    REQUEST_POSTS
} from '../constants/ActionTypes';

const selectedReddit = (state = 'reactjs',action) => {
    switch (action.type) {
        case SELECT_REDDIT:
            return action.reddit;
        default:return state;
    }
}

const receivePosts = (state = {
    isFetching:false,
    items:[]
},action) => {
    switch(action.type) {
        case REQUEST_POSTS:
            return {
                ...state,
                isFetching:true
            }
        case RECEIVE_POSTS:
            return {
                ...state,
                isFetching:false,
                items:action.posts,
                lastUpdated:action.receiveTime
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