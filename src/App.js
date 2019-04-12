import React, { Component } from "react";

import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Settings from "./pages/Settings";
import "./App.scss";

/**
 * Base component of the APP.
 * Basically, it's going to manage the App routes for now.
 *
 * @class App
 * @extends {Component}
 */
class App extends Component {
  render() {
    return (
      <div className="rlx">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/details/:username?" component={Home} />
          <Route path="/settings" component={Settings} />
        </Switch>
      </div>
    );
  }
}

export default App;
