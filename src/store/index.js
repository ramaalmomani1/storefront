import { combineReducers, createStore } from "redux";
import { catReducer } from "./categoriesReducer";
import { proReducer } from "./productsReducer";
const reducers = combineReducers({ catReducer, proReducer });

function store() {
  return createStore(reducers);
}

export default store();
