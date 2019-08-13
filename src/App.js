import React, { useState, useReducer } from 'react';
import './App.css';

import { initialState, todoReducer } from './reducers/todoReducer';

const App = () => {
  const [todo, setTodo] = useState('');
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const handleChange = event => {
    setTodo(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch({ type: 'ADD_TODO', payload: todo });
    setTodo('');
  };

  return (
    <div className='App'>
      <h1>Reducer Todo App</h1>
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

      {state.todos.map(todo => (
        <div
          key={todo.id}
          onClick={() => dispatch({ type: 'TOGGLE_TODO', payload: todo })}>
          <p>Todo: {todo.item}</p>
          <p>Completed: {todo.completed ? 'TRUE' : 'FALSE'}</p>
          <p>ID: {todo.id}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
