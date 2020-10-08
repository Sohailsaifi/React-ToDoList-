import React from 'react';
import Todo from './Todo';

const TodoList = ({todos, setTodos, filteredTodos}) => {
    return (
        <div className="todo-container">
             <ul className="todo-list">
                 <Todo
                 setTodos = {setTodos}
                 todos = {todos}
                 />
             </ul>
        </div>
    );
};

export default TodoList;