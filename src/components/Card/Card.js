import React from "react";

import Thumbnail from "components/Thumbnail/Thumbnail";

import styles from "./Card.module.scss";

const Card = ({ imageUrl, fullName, username, email }) => {
  return (
    <div className={styles.card}>
      <div className="card__thumbnail">
        <Thumbnail
          url={imageUrl}
          size="80px"
        />
      </div>
      <h1 className={styles["card__title"]}>{fullName}</h1>
      <p className={styles["card__info"]}>{email}</p>
      <p className={styles["card__info"]}>@{username}</p>
    </div>
  );
};

export default Card;
