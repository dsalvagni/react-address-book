import { QUERY_SET } from "store/actions/search";
import updateObject from "store/utility";

const INITIAL_STATE = {
  query: ""
};

/**
 * Manages the state of the search string
 * @param {Object} [state=INITIAL_STATE]
 * @param {Object} action
 * @returns
 */
function search(state = INITIAL_STATE, action) {
  switch (action.type) {
    case QUERY_SET:
      return updateObject(state, action.payload);
    default:
      return state;
  }
}

export default search;
