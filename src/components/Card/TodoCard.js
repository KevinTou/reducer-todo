import React from 'react';

const TodoCard = ({ todo, dispatch }) => {
  return (
    <div
      className={`card ${todo.completed ? 'completed' : ''}`}
      onClick={() => dispatch({ type: 'TOGGLE_TODO', payload: todo })}>
      <p>{todo.item}</p>
      {/* <p>Completed: {todo.completed ? 'TRUE' : 'FALSE'}</p>
      <p>ID: {todo.id}</p> */}
    </div>
  );
};

export default TodoCard;
