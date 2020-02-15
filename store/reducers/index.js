const initialState = {
  todos: []
};

const todoReducer = (state = initialState, action) => {
  console.log(action.type);
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
    default:
      return state;
  }
};
export default todoReducer;
