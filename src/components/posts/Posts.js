import React, {Component} from 'react';
import {postService} from "../../services";
import {Post} from "../post/Post";

class Posts extends Component {
    constructor(props) {
        super(props );
        this.state = {posts:[]}
    }
    componentDidMount() {
        postService.getAll().then(({data}) => this.setState({posts:data}))
    }

    render() {
        return (
            <div>
                <h3>Posts</h3>
                {this.state.posts.map(post => <Post key={post.id} post={post}/>)}
            </div>
        );
    }
}

export {Posts};