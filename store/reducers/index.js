const initialState = {
  todos: []
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.todo]
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.todo.id)
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.id
            ? { ...todo, isComplete: !todo.isComplete }
            : todo
        )
      };
    default:
      return state;
  }
};
export default todoReducer;
