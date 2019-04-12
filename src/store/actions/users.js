import { fetch, load } from "services/users";
import { apiStart, apiEnd } from "./index.js";
export const USERS_SET = "USERS_SET";
export const USERS_FETCH = "USERS_FETCH";
export const USERS_CLEAR = "USERS_CLEAR";
export const USERS_ADD = "USERS_ADD";

/**
 * Set the UserData values to the store.
 *
 * @export usersSet
 * @param {UsersData} data
 * @returns
 */
export function usersSet(data) {
  return { type: USERS_SET, payload: data };
}

/**
 * Cleans the UserData from the store
 * @export usersClear
 * @returns
 */
export function usersClear() {
  return { type: USERS_CLEAR };
}

/**
 * Fetch users from the API
 *
 * @export usersFetch
 * @param {APIUsersOptions} options
 * @returns
 */
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

/**
 * Load more users from either the buffer or the main collection.
 * It's going to fetch more users from the endpoint as well.
 *
 * @export usersLoadMore
 * @param {APIUsersOptions} options
 * @returns
 */
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
