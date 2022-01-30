import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";


export const fetchTodos = createAsyncThunk(
    'todos/fetchTodos',
    async function (_, {rejectWithValue}) {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10");
            if (!response.ok) {
                throw new Error("Ошибка на стороне сервера")
            }
            // console.log(response.json())
            const data = await response.json()
            console.log(data)
            return data;
        } catch (error) {
            return rejectWithValue(error.message)
        }

    }
);

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
        status: null,
        error: null,
    },
    reducers: {
        addTodo(state, action) {
            state.todos.push(
                {
                    id: new Date().toISOString(),
                    title: action.payload,
                    completed: false,
                }
            )
        },
        removeTodo(state, action) {
            state.todos = state.todos.filter(
                todo => todo.id !== action.payload
            )
        },
        toggleTodoComplete(state, action) {
            const toggleTask = state.todos.find(todo => todo.id === action.payload)
            toggleTask.completed = !toggleTask.completed
        },
    },
    extraReducers: {
        [fetchTodos.pending]: (state) => {
            state.status = "Идет загрузка данных...";
            state.error = null;
        },
        [fetchTodos.fulfilled]: (state, action) => {
            state.status = "Данные загружены успешно!";
            state.todos = action.payload;
        },
        [fetchTodos.rejected]: (state, action) => {
            state.status = "Произошла ошибка";
            state.error = action.payload;
        },
    }
});

export const {addTodo, removeTodo, toggleTodoComplete} = todoSlice.actions;
export default todoSlice.reducer;