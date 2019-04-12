/** 
 * Redux Store base configuration
 * Registry of all reducers
 * 
 * This store holds and splits all reducers and actions in different folders and files.
 * reducers/*
 * actions/*
*/
import { combineReducers, compose } from "redux";

import indexReducer from "store/reducers";
import usersReducer from "store/reducers/users";
import searchReducer from "store/reducers/search";
import settingsReducer from "store/reducers/settings";

import { STORE_PATH as USERS_STORE_PATH } from "services/users";

/* eslint-disable no-underscore-dangle */
export const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */

export const rootReducer = combineReducers({
  [USERS_STORE_PATH]: usersReducer,
  search: searchReducer,
  api: indexReducer,
  settings: settingsReducer
});
