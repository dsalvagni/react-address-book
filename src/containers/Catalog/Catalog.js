import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Config from "config.js";

import CatalogWrapper from "components/CatalogWrapper/CatalogWrapper";
import CatalogHeader from "components/CatalogHeader/CatalogHeader";
import CatalogFooter from "components/CatalogFooter/CatalogFooter";
import CatalogMain from "components/CatalogMain/CatalogMain";
import Icon from "components/Icon/Icon";

import { get, filterByFullName } from "services/users";
import { usersFetch, usersLoadMore } from "store/actions/users";

/**
 * Container component to manage the users' catalog.
 *
 * Container
 * Statefull
 * Redux
 * @class Catalog
 * @extends {Component}
 */
class Catalog extends Component {
  /**
   * Build the status message accordingly to the current catalog state
   * * loading
   * * page & results count
   * * end of the catalog
   *
   * @returns {String|Object}
   * @memberof Catalog
   */
  statusMessage() {
    const api = this.props.api;
    const users = this.props.users;
    let message = "";
    if (api.usersIsLoading)
      return (
        <Fragment>
          <Icon name="loading" size={18} spinning /> Loading
        </Fragment>
      );

    message = `Showing ${users.items.length} of ${
      Config.contactsLimit
    } contacts.`;

    if (users.items.length === Config.contactsLimit)
      message += " End of the catalog";

    return message;
  }

  /**
   * Build the nationalities param values, that will be passed to the API call.
   *
   * @returns {String}
   * @memberof Catalog
   */
  getNationalities() {
    const settings = this.props.settings,
      nationalities = settings && settings.nationalities,
      selection = [];

    for (let n in nationalities) {
      if (!nationalities.hasOwnProperty(n)) return;
      if (nationalities[n]) selection.push(n);
    }
    return selection.join(",");
  }

  /**
   * It should load the first page of the catalog at this point
   *
   * @memberof Catalog
   */
  componentDidMount() {
    if (!this.props.users.items.length)
      this.props.usersFetch({ page: 1, nat: this.getNationalities() });
  }

  /**
   * When the catalog scrolls hit the bottom, it should load a new page and append to the end.
   *
   * @memberof Catalog
   */
  onScrollEnd() {
    let page = this.props.users.meta.page + 1;
    this.props.usersLoadMore({ page, nat: this.getNationalities() });
  }

  render() {
    return (
      <CatalogWrapper isCompact={this.props.isCompact}>
        <CatalogHeader />
        <CatalogMain
          items={this.props.users.items}
          onScrollEnd={this.onScrollEnd.bind(this)}
        />
        <CatalogFooter status={this.statusMessage()} />
      </CatalogWrapper>
    );
  }
}

Catalog.defaultProps = {
  isCompact: false
};

Catalog.propTypes = {
  /** Set if it should display a compact list of the catalog */
  isCompact: PropTypes.bool,
  /** List of the users */
  users: PropTypes.object,
  /** API states */
  api: PropTypes.object,
  /** App settings */
  settings: PropTypes.object
};

const mapStateToProps = (state, props) => {
  return {
    users: get(state, filterByFullName(state.search.query)),
    api: state.api,
    settings: state.settings
  };
};

export default connect(
  mapStateToProps,
  {
    usersFetch,
    usersLoadMore
  }
)(Catalog);
