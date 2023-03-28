import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import auth from "./auth";
import userPref from "./userPreference";
import users from "./users";
import userInfo from "./userInfo";
import matchInfo from "./userCompatibility";
import matchPrefs from "./matchPreferencs";

const reducer = combineReducers({
  auth,
  userPref,
  userInfo,
  users,
  matchInfo,
  matchPrefs,
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
export * from "./userCompatibility";
export * from "./matchPreferencs";
