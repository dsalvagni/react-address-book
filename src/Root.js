import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import { composeEnhancers, rootReducer } from "store";
import { BrowserRouter as Router } from "react-router-dom";

/**
 * Wrapps the app with redux and react router
 */
function Root({ children, initialState = {} }) {
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  );

  return (
    <Provider store={store}>
      <Router>{children}</Router>
    </Provider>
  );
}

export default Root;
