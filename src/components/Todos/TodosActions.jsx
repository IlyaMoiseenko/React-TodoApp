import React from 'react';
import Button from "../UI/Button";
import {RiDeleteBin2Line, RiRefreshLine} from "react-icons/ri";

const TodosActions = ({resetTodos, deleteCompleted, completedTodosCount}) => {
    return (
        <div>
            <Button
                title="Reset Todos"
                onClick={() => resetTodos()}
            >
                <RiRefreshLine />
            </Button>

            <Button
                title="Clear Completed Todos"
                onClick={() => deleteCompleted()}
                disable={!completedTodosCount}
            >
                <RiDeleteBin2Line />
            </Button>
        </div>
    );
};

export default TodosActions;