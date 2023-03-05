import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { questionsReducer } from "./reducer";

const rootReducer = combineReducers({
  questions: questionsReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
