import React from 'react';

const User = (props) => {

    let {item,chooseUser} = props;

    return (
        <div>
            <h4>{item.id} - {item.name}</h4>
            <button onClick={
                () => {chooseUser(item)}
            }>Details</button>
        </div>
    );
};

export {User};