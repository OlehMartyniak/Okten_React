import React, {useEffect, useState} from 'react';
import {User} from "../User/User";
import {UserInfo} from "../UserInfo/UserInfo";

const Users = () => {

    let [users,setUsers] = useState([]);
    let [user,setUser] = useState(null)

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => setUsers(value))
    },[]);

    const chooseUser = (user) => {
        setUser(user)
    }

    return (
        <div>
            {user && <UserInfo user={user}/>}
            {users.map(user => <User item={user} chooseUser={chooseUser} key={user.id}/>)}


        </div>
    );
};

export {Users};