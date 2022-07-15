import React, {Component} from 'react';
import {commentService, postService} from "../../services";
import {Post} from "../post/Post";
import {Comment} from "../comment/Comment";

class Comments extends Component {
    constructor(props) {
        super(props );
        this.state = {comments:[]}
    }
    componentDidMount() {
        commentService.getAll().then(({data}) => this.setState({comments:data}))
    }

    render() {
        return (
            <div>
                <h3>Comments</h3>
                {this.state.comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
            </div>
        );
    }
}

export {Comments};