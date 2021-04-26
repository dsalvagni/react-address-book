import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";

import { get, getByUsername } from "services/users";
import { usersFetch } from "store/actions/users";

import Thumbnail from "components/Thumbnail/Thumbnail";
import Flag from "components/Flag/Flag";
import User from "models/User";

import styles from "./CatalogDetails.module.scss";

/**
 * Presents User's details
 * It's going to be shown as a side panel on desktop and as a modal on mobile/tablet
 * 
 * If not user is specified, it should return to the home page.
 *
 * @class CatalogDetails
 * @extends {Component}
 */
class CatalogDetails extends Component {
  componentDidMount() {
    if (!this.props.users.items.length) return <Redirect to="/" />;
  }

  /**
   * On mobile/tablet, a link is going to be shown behind the modal. This link
   * navigates the page back to the home page. It's useful to when the users clicks 
   * outside the modal. Although, to avoid the click when the user hits the modal,
   * we should stop the event propagation.
   *
   * @param {Event} event
   * @memberof CatalogDetails
   */
  onDetailsClick(event) {
    event.stopPropagation();
  }

  render() {
    const user = this.props.user;
    if (!user) return <Redirect to="/" />;
    const cssClass = [styles.details, styles["details--open"]];
    return (
      <Fragment>
        <Link to="/" className={styles["details__overlay"]} />
        <div
          className={cssClass.join(" ")}
          onClick={this.onDetailsClick.bind(this)}
        >
          <div className={styles["details__content"]}>
            <Link to="/" className={styles["details__close"]}>
              &times;
            </Link>
            <Thumbnail
              url={user.getThumbnail()}
              className={styles["details__thumbnail"]}
            />
            <h1 className={styles["details__title"]}>{user.getFullName()}</h1>
            <p className={styles["details__subtitle"]}>@{user.getUsername()}</p>

            <div className={styles["details__contact"]}>
              <div className={styles["contact__row"]}>
                <div className={styles["row__label"]}>E-mail</div>
                <div className={styles["row__content"]}>
                  <span className="truncate">
                    <a href={`mailto:${user.get("email")}`}>
                      {user.get("email")}
                    </a>
                  </span>
                </div>
              </div>
              <div className={styles["contact__row"]}>
                <div className={styles["row__label"]}>Phone</div>
                <div className={styles["row__content"]}>
                  <span className="truncate">
                    <a href={`tel:${user.get("phone")}`}>{user.get("phone")}</a>
                  </span>
                </div>
              </div>
              <div className={styles["contact__row"]}>
                <div className={styles["row__label"]}>Mobile</div>
                <div className={styles["row__content"]}>
                  <span className="truncate">
                    <a href={`tel:${user.get("cell")}`}>{user.get("cell")}</a>
                  </span>
                </div>
              </div>
              <div className={styles["contact__row"]}>
                <div className={styles["row__label"]}>Nationality</div>
                <div className={styles["row__content"]}>
                  {user.get("nat")} <Flag nationality={user.get("nat")} />
                </div>
              </div>
              <div className={styles["contact__row"]}>
                <div className={styles["row__label"]}>Address</div>
                <div className={styles["row__content"]}>
                  <span className="pre-wrap">{user.getFullAddress()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

CatalogDetails.propTypes = {
  user: PropTypes.instanceOf(User)
};

const mapStateToProps = (state, props) => {
  const { username } = props.match.params;
  return {
    users: get(state),
    user: getByUsername(state, username)
  };
};

export default connect(
  mapStateToProps,
  {
    usersFetch
  }
)(CatalogDetails);
