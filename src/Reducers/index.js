import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import todoReduce from "./todoReduce";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  counterReducer,
  loggedReducer,
  todoReduce,
});

export default allReducers;
