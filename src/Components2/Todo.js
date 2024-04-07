import React from 'react';

const Todo = (props) => {
    const {todo,remove}=props
    return (
        <div className='todo'>
            <span>{todo.name}</span>
            <span onClick={()=>remove(todo.id)}><i class="fa-solid fa-xmark"></i></span>
        </div>
    );
}

export default Todo;
