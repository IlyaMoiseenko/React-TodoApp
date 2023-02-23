import React from 'react';
import Todo from "./Todo";
import styles from './style/TodoList.module.css'

const TodoList = ({todos, deleteTodo, toggleTodo}) => {
    return (
        <div className={styles.todoListContainer}>
            {
                !todos.length && <h1>TodoList is empty</h1>
            }
            {
                todos.map((item) => <Todo key={item.id} todo={item} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />)
            }
        </div>
    )
};

export default TodoList;