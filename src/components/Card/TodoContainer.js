import React from 'react';

import TodoCard from './TodoCard';

const TodoContainer = ({ state, dispatch }) => {
  return (
    <>
      <h2>List of Todos</h2>
      <div className='card-container'>
        {state.todos.map(todo => (
          <TodoCard key={todo.id} todo={todo} dispatch={dispatch} />
        ))}
      </div>
    </>
  );
};

export default TodoContainer;
