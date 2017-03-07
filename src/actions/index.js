/**
 * Created by linyuhua on 2017/3/7.
 */
import {
    SELECT_REDDIT,
    RECEIVE_POSTS
} from '../constants/ActionTypes';

export const selectReddit = reddit => ({
    type:SELECT_REDDIT,
    reddit
})

export const fetchPosts = reddit => dispatch => {
    return fetch(`https://www.reddit.com/r/${reddit}.json`)
        .then(response => response.json())
        .then(json => dispatch(receivePosts(reddit,json)))
}

const receivePosts = (reddit,json) => ({
    type:RECEIVE_POSTS,
    reddit,
    posts:json.data.children.map(child => child.data),
    receiveTime:Date.now()
})