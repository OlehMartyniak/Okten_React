import React from 'react';
import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <h3>Menu</h3>
            <ol>
                <li><Link to={'todos'}>todos</Link></li>
                <li><Link to={'albums'}>albums</Link></li>
                <li><Link to={'comments'}>comments</Link></li>
            </ol>
        </div>
    );
};

export {Menu};