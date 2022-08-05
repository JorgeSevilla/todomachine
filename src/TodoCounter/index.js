import React from 'react';
import { TodoContext } from '../TodoContext';
import '../TodoCounter/TodoCounter.css';

function TodoCounter(){
    const { totalTodos, completedTodos} = React.useContext(TodoContext);
    
    return(
        <h1 className='TodoCounter'>Has completado {completedTodos} de {totalTodos} TODOS</h1>
    );
}

export { TodoCounter };