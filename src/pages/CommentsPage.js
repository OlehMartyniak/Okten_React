import React from 'react';
import {CommentsComponent} from "../components";
import {Outlet} from "react-router-dom";

const CommentsPage = () => {
    return (
        <div>
            <Outlet/>
            <CommentsComponent/>
        </div>
    );
};

export {CommentsPage};