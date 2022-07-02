import React, {useState} from 'react';
import './App.css'
import {UserPosts, Users, Posts} from "./components";



const App = () => {

    let [userId,setUserId] = useState(null);

    return (
        <div>
            <div className={'usersAndPosts'}>
                <Users setUserId={setUserId}/>
                {userId && <Posts userId={userId}/>}
            </div>
        </div>
    );
};

export default App;
