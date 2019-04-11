import { API_START, API_END } from "store/actions";
import updateObject from "store/utility";

const INITIAL_STATE = {};

function users(state = INITIAL_STATE, action) {
  switch (action.type) {
    case API_START:
      return updateObject(state, { [action.payload]: true });
    case API_END:
      return updateObject(state, { [action.payload]: false });
    default:
      return state;
  }
}

export default users;
