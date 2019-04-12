import {
  USERS_SET,
  USERS_FETCH,
  USERS_CLEAR,
  USERS_ADD
} from "store/actions/users";
import updateObject from "store/utility";

export const INITIAL_STATE = {
  items: [],
  meta: {}
};

/**
 * Manages all users reducers
 * @param {Object} [state=INITIAL_STATE]
 * @param {Object} action
 * @returns
 */
function users(state = INITIAL_STATE, action) {
  switch (action.type) {
    /** 
     * Set the payload values to the store - it's going to recriate the object
    */
    case USERS_SET:
      return updateObject(state, action.payload);
    /** 
     * Set the inital state to the store
    */
    case USERS_CLEAR:
      return updateObject(state, INITIAL_STATE);
    /** 
     * Set the payload values to the store after fetching data.
    */
    case USERS_FETCH:
      return updateObject(state, action.payload);
    /** 
     * Updates the page number on meta info.
     * Adds items to the current items list.
     * @todo this should be a separated function
    */
    case USERS_ADD:
      return {
        meta: {
          ...state.meta,
          page: action.payload.page
        },
        items: [...state.items, ...action.payload.items]
      };
    default:
      return state;
  }
}

export default users;
