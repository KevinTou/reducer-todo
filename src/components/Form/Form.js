import React, { useState } from 'react';

const Form = ({ state, dispatch }) => {
  const [todo, setTodo] = useState('');

  const handleChange = event => {
    setTodo(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (todo !== '') {
      dispatch({ type: 'ADD_TODO', payload: todo });
      setTodo('');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='todo'
          value={todo}
          onChange={handleChange}
          placeholder='Enter a todo...'
        />
        <button type='submit'>Submit</button>
      </form>

      <button onClick={() => dispatch({ type: 'CLEAR_TODO' })}>
        Clear Completed
      </button>
    </div>
  );
};

export default Form;
