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

class CatalogDetails extends Component {
  componentDidMount() {
    if (!this.props.users.items.length) return <Redirect to="/" />;
  }

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
