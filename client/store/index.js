import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import auth from "./auth";
import userPreferenceReducer from "./userPreference";
import users from "./users";
import userInfo from "./userInfo";

const reducer = combineReducers({
  auth,
  userPreferenceReducer,
  userInfo,
  users,
});

const middleware = applyMiddleware(
  thunkMiddleware,
  createLogger({ collapsed: true })
);
const store = createStore(reducer, middleware);

export default store;
export * from "./auth";
// export * from "./userPreference";
export * from "./userInfo";
