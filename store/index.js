import { createStore, combineReducers } from "redux";
import todoReducer from "./reducers/index";

import { reducer as reduxFormReducer } from "redux-form";

// Debug用
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  todos: todoReducer,
  form: reduxFormReducer
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
