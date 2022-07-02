import React, {useEffect, useState} from 'react';
import {usersService} from "../../services";
import {User} from "../User/User";

const Users = ({setUserId}) => {

    let [users,setUsers] = useState([]);

    useEffect(()=> {
        usersService.getUsers().then(({data}) => setUsers(data))
    },[]);


    return (
        <div>
            {users.map(user => <User user={user} key={user.id} setUserId={setUserId}/>)}
        </div>
    );
};

export {Users};