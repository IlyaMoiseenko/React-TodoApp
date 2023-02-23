import React, {useState} from 'react';
import {v4 as uuidv4} from 'uuid'
import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";

import './styles/App.css'
import TodosActions from "./components/Todos/TodosActions";

export default function App() {
    // States
    const [todos, setTodos] = useState([])

    // Variables
    const completedTodosCount = todos.filter((item) => item.isCompleted).length

    // Functions
    const addTodoHandler = (text) => {
        const newTodo = {
            id: uuidv4(),
            text: text,
            isCompleted: false
        }
        setTodos([...todos, newTodo])
    }

    const deleteTodoHandler = (id) => {
        setTodos(todos.filter((item) => item.id !== id))
    }

    const toggleTodoHandler = (id) => {
        setTodos(todos.map((item) =>
            item.id === id
                ? {...item, isCompleted: !item.isCompleted}
                : {...item}
        ))
    }

    const resetTodoHandler = () => {
        setTodos([])
    }

    const deleteCompletedTodosHandler = () => {
        setTodos(
            todos.filter((item) => !item.isCompleted)
        )
    }


    return (
        <div className='app'>
            <h1>TodoApp</h1>
            <TodoForm addTodo={addTodoHandler} />

            {
                todos.length !== 0
                    ? <TodosActions
                        resetTodos={resetTodoHandler}
                        deleteCompleted={deleteCompletedTodosHandler}
                        completedTodosCount={completedTodosCount}
                    />
                    : ''
            }

            <TodoList todos={todos} deleteTodo={deleteTodoHandler} toggleTodo={toggleTodoHandler} />
        </div>
    );
}
