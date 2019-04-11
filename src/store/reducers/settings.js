import { NATIONALITIES_SET } from "store/actions/settings";

import Config from "config.js";

const nationalities = Config.nationalities.reduce((obj, item) => {
  obj[item.key] = true;
  return obj;
}, {});

const INITIAL_STATE = {
  nationalities
};

function users(state = INITIAL_STATE, action) {
  switch (action.type) {
    case NATIONALITIES_SET:
      return {
        nationalities: {
          ...state.nationalities,
          ...action.payload
        }
      };
    default:
      return state;
  }
}

export default users;
