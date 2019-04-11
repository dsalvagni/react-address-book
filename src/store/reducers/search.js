import { QUERY_SET } from "store/actions/search";
import updateObject from "store/utility";

const INITIAL_STATE = {
  query: ""
};

function users(state = INITIAL_STATE, action) {
  switch (action.type) {
    case QUERY_SET:
      return updateObject(state, action.payload);
    default:
      return state;
  }
}

export default users;
