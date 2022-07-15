import React, {Component} from 'react';

class Comment extends Component {
    constructor(props) {
        super(props );
    }

    render() {
        const {name,body,email} = this.props.comment;
        return (
            <div>
                <h4>{name}</h4>
                <p>{body}</p>
                <p>{email}</p>
            </div>
        );
    }
}

export {Comment};