import React, {useState} from 'react';
import styles from './style/TodoForm.module.css'

const TodoForm = ({addTodo}) => {
    const [text, setText] = useState('')

    const onSubmitHandler = (event) => {
        event.preventDefault()
        addTodo(text)
        setText('')
    }

    return (
        <div className={styles.todoFormContainer}>
            <form onSubmit={onSubmitHandler}>
                <input
                    value={text}
                    onChange={(event) => setText(event.target.value)}
                    type="text"
                    placeholder="Enter new todo"
                />

                <button
                    type="submit"
                >
                    Submit
                </button>
            </form>
        </div>

    );
};

export default TodoForm;