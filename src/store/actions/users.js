import { fetch, load } from "services/users";
import { apiStart, apiEnd } from "./index.js";
export const USERS_SET = "USERS_SET";
export const USERS_FETCH = "USERS_FETCH";
export const USERS_CLEAR = "USERS_CLEAR";
export const USERS_ADD = "USERS_ADD";

export function usersSet(collection) {
  return { type: USERS_SET, payload: collection };
}

export function usersClear() {
  return { type: USERS_CLEAR };
}

export function usersFetch(options) {
  return dispatch => {
    dispatch(apiStart("usersIsLoading"));
    return fetch(options).then(data => {
      dispatch({
        type: USERS_FETCH,
        payload: data
      });
      dispatch(apiEnd("usersIsLoading"));
    });
  };
}

export function usersLoadMore(options) {
  return dispatch => {
    dispatch(apiStart("usersIsLoading"));
    return load(options).then(data => {
      dispatch({
        type: USERS_ADD,
        payload: data
      });
      dispatch(apiEnd("usersIsLoading"));
    });
  };
}
