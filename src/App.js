import React, { useReducer } from 'react';
import './App.css';

import { initialState, todoReducer } from './reducers/todoReducer';
import Form from './components/Form/Form';
import TodoContainer from './components/Card/TodoContainer';

const App = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <div className='App'>
      <h1>Reducer Todo App</h1>
      <Form state={state} dispatch={dispatch} />
      <TodoContainer state={state} dispatch={dispatch} />
    </div>
  );
};

export default App;
