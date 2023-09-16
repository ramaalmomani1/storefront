import { combineReducers, createStore } from "redux";
import { catReducer } from "./categoriesReducer";

// const reducers = combineReducers({catReducer,proReducer})

function store() {
  return createStore(catReducer);
}

export default store();
