import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addTodo} from "../store/todoSlice";

const InputField = ({title, setText}) => {

    const dispatch = useDispatch();
    const addTask = () => {
        dispatch(addTodo(title))
        setText('')
    };


    return (
        <label>
            <input value={title} onChange={(e) => setText(e.currentTarget.value)} placeholder="Новая задача"/>
            <button onClick={addTask} className="addButton">Добавить</button>
        </label>
    )
};

export default InputField;