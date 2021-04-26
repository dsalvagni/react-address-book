import { API_START, API_END } from "store/actions";
import updateObject from "store/utility";

const INITIAL_STATE = {};

/**
 * This reducer is used to set, during a fetch request, the API state.
 * Before the API fetchs, it should call API_START and after it ends, API_END.
 * This way we can track any request state.
 * 
 * Action example: { type: API_START, payload: "APIUserStarted"}
 *
 * @param {Object} [state=INITIAL_STATE]
 * @param {Object} action
 * @returns
 */
function index(state = INITIAL_STATE, action) {
  switch (action.type) {
    case API_START:
      return updateObject(state, { [action.payload]: true });
    case API_END:
      return updateObject(state, { [action.payload]: false });
    default:
      return state;
  }
}

export default index;
