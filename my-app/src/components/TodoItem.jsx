import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {deleteTodo, toggleStatus, toggleTodoComplete} from "../store/todoSlice";

const TodoItem = ({id, completed, title}) => {

    const dispatch = useDispatch();

    return (
        <>
            <input type="checkbox" checked={completed} onChange={() => dispatch(toggleStatus(id))}/>
            <span>{title}</span>
            <button onClick={() => dispatch(deleteTodo(id))} style={{
                color: 'red',
                border: 'none',
                backgroundColor: 'white',
                cursor: 'pointer',
            }}>&times;</button>
        </>
    );
};

export default TodoItem;