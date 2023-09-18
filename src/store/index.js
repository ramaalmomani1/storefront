import { combineReducers, createStore } from "redux";
import { catReducer } from "./categoriesReducer";
import { proReducer } from "./productsReducer";
import { cartReducer } from "./cartReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const reducers = combineReducers({ catReducer, proReducer, cartReducer });

function store() {
  return createStore(reducers, composeWithDevTools());
}

export default store();
