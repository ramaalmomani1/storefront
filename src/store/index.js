import { combineReducers, createStore } from "redux";
import { catReducer } from "./categoriesReducer";
import { proReducer } from "./productsReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const reducers = combineReducers({ catReducer, proReducer });

function store() {
  return createStore(reducers, composeWithDevTools());
}

export default store();
