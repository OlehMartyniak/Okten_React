import React, {useEffect, useState} from 'react';
import {getTodos} from "../../services";
import {TodoComponent} from "./TodoComponent";

const TodosComponent = () => {

    let [todos,setTodos] = useState([]);

    useEffect(()=> {
        getTodos().then(value => setTodos([...value]))
    },[]);

    return (
        <div>
            {todos.map(value => <TodoComponent key={value.id} item={value}/>)}
        </div>
    );
};

export {TodosComponent};