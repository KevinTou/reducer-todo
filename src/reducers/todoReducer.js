export const initialState = {
  todos: [
    // How the objects are formatted:
    // { item: 'Test 3', completed: false, id: 38929822289 },
    // { item: 'Test 2', completed: false, id: 3892987589 },
  ],
};

export const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      const newTodo = {
        item: action.payload,
        completed: false,
        id: Date.now(),
      };

      return {
        ...state,
        todos: [...state.todos, newTodo],
      };
    case 'TOGGLE_TODO':
      const toggleTodos = state.todos.map(todo => {
        if (todo.id === action.payload.id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });

      return {
        ...state,
        todos: toggleTodos,
      };
    case 'CLEAR_TODO':
      const clearTodos = state.todos.filter(todo => todo.completed !== true);

      return {
        ...state,
        todos: clearTodos,
      };
    default:
      return state;
  }
};
