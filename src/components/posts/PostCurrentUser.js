import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {getCurrentCommentPost} from "../../services";
import {PostComponent} from "./PostComponent";

const PostCurrentUser = () => {

    const {postId} = useParams();
    let [posts,setPosts] = useState([])

    useEffect(()=> {
        getCurrentCommentPost(postId).then(value => setPosts([{...value}]))
    },[postId])


    return (
        <div>
            {posts.map(value => <PostComponent key={value.id} item={value}/>)}
        </div>
    );
};

export {PostCurrentUser};