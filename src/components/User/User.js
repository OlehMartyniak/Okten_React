import React from 'react';

const User = ({user,setUserId}) => {



    return (
        <div className={'user'}>
            <h4>{user.id} - {user.name}</h4>
            <button onClick={()=>setUserId(user.id)}>user info</button>
        </div>
    );
};

export {User};