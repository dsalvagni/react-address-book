import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import { composeEnhancers, rootReducer } from "store";
import { HashRouter as Router } from "react-router-dom";

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
