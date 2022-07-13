import React from 'react';
import {Outlet} from "react-router-dom";

import {Menu} from "../components";

const Layout = () => {
    return (
        <div>
            <Menu/>
            <h3>Content</h3>
            <Outlet/>
        </div>
    );
};

export {Layout};