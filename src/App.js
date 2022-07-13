import React from 'react';
import {Route, Routes} from "react-router-dom";
import {AlbumsPage, CommentsPage, TodosPage} from "./pages";
import {Layout} from "./layout/layout";
import {PostComponent, PostCurrentUser} from "./components";


const App = () => {
    return (
        <div>
            <Routes>

                <Route path={'/'} element={<Layout/>}>
                    <Route path={'/todos'} element={<TodosPage/>}/>
                    <Route path={'/albums'} element={<AlbumsPage/>}/>
                    <Route path={'/comments'} element={<CommentsPage/>}>
                        <Route path={':postId'} element={<PostCurrentUser/>}/>
                    </Route>
                </Route>

            </Routes>
        </div>
    );
};

export default App;
