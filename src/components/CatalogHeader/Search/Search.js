import React, { Component } from "react";
import { connect } from "react-redux";

import { querySet } from "store/actions/search";

import styles from "./Search.module.scss";

import Icon from "components/Icon/Icon";

/**
 * Search component for the users' catalog.
 * The query it's typed here will be propagate through Redux in order to make 
 * it available so other components can consume it.
 * Statefull | Redux
 * @class Search
 * @extends {Component}
 */
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.search.query
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });

    this.delay && clearTimeout(this.delay);

    this.delay = setTimeout(
      this.props.querySet.bind(this, event.target.value),
      300
    );
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.querySet(this.state.value);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div className={styles.search}>
          <Icon name="search" size={22} className={styles.seach__icon} />
          <input
            type="search"
            placeholder="Search"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    search: state.search
  };
};

export default connect(
  mapStateToProps,
  {
    querySet
  }
)(Search);
