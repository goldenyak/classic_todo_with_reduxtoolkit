import './App.css';
import React, {useState, useEffect} from "react";
import InputField from "./components/InputField";
import TodoItem from "./components/TodoItem";
import {useDispatch, useSelector} from "react-redux";
import {fetchTodos} from "./store/todoSlice";

function App() {
    const [text, setText] = useState('');  // стейт для инпута, куда вводим название тудушки (главный инпут)
    const todos = useSelector(state => state.todos.todos);
    const {status, error} = useSelector(state => state.todos);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTodos());
    }, [dispatch])

    return (
        <div className="App">
            <InputField title={text} setText={setText}/>
            {status === "Идет загрузка данных..." && <h2>Идет загрузка данных...</h2> }
            {status === "Данные загружены успешно!" && <h2>Данные загружены успешно!</h2> }
            {status === "Произошла ошибка" && <h2>Произошла ошибка</h2> }
            <ul>
                {todos.map(todo =>
                    <li key={todo.id}>
                        <TodoItem title={todo.title}
                                  completed={todo.completed}
                                  id={todo.id}
                        />
                    </li>)}
            </ul>
        </div>
    );
}

export default App;
