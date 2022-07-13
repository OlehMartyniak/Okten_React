import React from 'react';
import {Link} from "react-router-dom";

const CommentComponent = ({item}) => {
    return (
        <div>
            <h4>{item.email}</h4>
            <h3>{item.name}</h3>
            <p>{item.body}</p>
            <span><Link to={item.postId.toString()}>Post for component</Link></span>
            <hr/>
        </div>
    );
};

export {CommentComponent};