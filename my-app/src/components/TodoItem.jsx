import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {removeTodo, toggleTodoComplete} from "../store/todoSlice";

const TodoItem = ({id, completed, title}) => {

    const dispatch = useDispatch();

    return (
        <>
            <input type="checkbox" checked={completed} onChange={() => dispatch(toggleTodoComplete(id))}/>
            <span>{title}</span>
            <button onClick={() => dispatch(removeTodo(id))} style={{
                color: 'red',
                border: 'none',
                backgroundColor: 'white',
                cursor: 'pointer',
            }}>&times;</button>
        </>
    );
};

export default TodoItem;