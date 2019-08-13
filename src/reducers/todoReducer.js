export const initialState = {
  todos: [
    { item: 'Test 3', completed: false, id: 38929822289 },
    { item: 'Test 2', completed: false, id: 3892987589 },
  ],
};

export const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            item: action.payload,
            completed: false,
            id: Date.now(),
          },
        ],
      };
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.payload.id) {
            return { ...todo, completed: !todo.completed };
          } else {
            return todo;
          }
        }),
      };
    case 'CLEAR_TODO':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.completed !== true),
      };
    default:
      return state;
  }
};
