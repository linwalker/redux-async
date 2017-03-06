/**
 * Created by linyuhua on 2017/3/6.
 */
import React from 'react';

const Posts = ({posts}) => (
    <ul>
        {posts.map((post,i)=>
            <li key={i}>{post}</li>
        )}
    </ul>
)
export default Posts;