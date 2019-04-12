import React from "react";
import PropTypes from "prop-types";

import Thumbnail from "components/Thumbnail/Thumbnail";
import Flag from "components/Flag/Flag";
import HighlightText from "components/HighlightText/HighlightText";

import User from "models/User";

import styles from "./Card.module.scss";
/**
 * Summarizes user information in a card format.
 * It can highlight a part of users full name that comes handy
 * in a search results list.
 * Stateless
 */
const Card = ({ user, highlight }) => {
  return (
    <div className={styles.card}>
      <Thumbnail url={user.getThumbnail()} size="80px" />
      <Flag nationality={user.get("nat")} className={styles["card__flag"]} />
      <h1 className={styles["card__title"]}>
        <HighlightText text={user.getFullName()} highlight={highlight} />
      </h1>
      <p className={styles["card__info"]}>{user.get("email")}</p>
      <p className={styles["card__info"]}>@{user.getUsername()}</p>
    </div>
  );
};

Card.propTypes = {
  /** User model */
  user: PropTypes.instanceOf(User).isRequired,
  /** String to be highlighted on user's fullname text*/
  highlight: PropTypes.string
};

export default Card;
