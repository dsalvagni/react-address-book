import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import { nationalitiesSet } from "store/actions/settings";
import { usersClear } from "store/actions/users";

import Config from "config.js";

class NationalitiesSettings extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.checked;
    const name = target.name;

    this.props.nationalitiesSet({
      [name]: value
    });

    this.props.usersClear();
  }

  getNationalitiesOptions() {
    const settings = this.props.settings,
      nationalities = (settings && settings.nationalities) || {};

    return Config.nationalities.map((n, k) => {
      return (
        <li key={k}>
          <label>
            <input
              type="checkbox"
              name={n.key}
              checked={nationalities[n.key]}
              onChange={this.handleInputChange}
            />{" "}
            {n.label}
          </label>
        </li>
      );
    });
  }

  render() {
    return (
      <Fragment>
        <h1>Nationalities</h1>
        <p>Filter your contacts by nationality</p>

        <ul className="list-unstyled">{this.getNationalitiesOptions()}</ul>
      </Fragment>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    settings: state.settings
  };
};

export default connect(
  mapStateToProps,
  {
    nationalitiesSet,
    usersClear
  }
)(NationalitiesSettings);
