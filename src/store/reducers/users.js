import {
  USERS_SET,
  USERS_FETCH,
  USERS_CLEAR,
  USERS_ADD
} from "store/actions/users";
import updateObject from "store/utility";

const INITIAL_STATE = {
  items: [],
  meta: {}
};

function users(state = INITIAL_STATE, action) {
  switch (action.type) {
    case USERS_SET:
      return updateObject(state, action.payload);
    case USERS_CLEAR:
      return updateObject(state, INITIAL_STATE);
    case USERS_FETCH:
      return updateObject(state, action.payload);
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
