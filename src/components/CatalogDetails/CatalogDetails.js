import React from "react";

import Thumbnail from "components/Thumbnail/Thumbnail";

import styles from "./CatalogDetails.module.scss";

const CatalogDetails = ({ show } = { show: false }) => {
  const cssClass = [styles.details];
  if (show) cssClass.push(styles["details--open"]);
  return (
    <div className={cssClass.join(" ")}>
      <div className={styles["details__content"]}>
        <a href="#" className={styles["details__close"]}>
          &times;
        </a>
        <Thumbnail
          url="https://randomuser.me/api/portraits/women/32.jpg"
          className={styles["details__thumbnail"]}
        />
        <h1 className={styles["details__title"]}>
          Kristin Banks With a Really Long Name
        </h1>
        <p className={styles["details__subtitle"]}>@username</p>

        <div className={styles["details__contact"]}>
          <div className={styles["contact__row"]}>
            <div className={styles["row__label"]}>E-mail</div>
            <div className={styles["row__content"]}>
              <span className="truncate">email@domain.com</span>
            </div>
          </div>
          <div className={styles["contact__row"]}>
            <div className={styles["row__label"]}>Phone</div>
            <div className={styles["row__content"]}>
              <span className="truncate">+49 123123 123 123</span>
            </div>
          </div>
          <div className={styles["contact__row"]}>
            <div className={styles["row__label"]}>Mobile</div>
            <div className={styles["row__content"]}>
              <span className="truncate">+49 123123 123 123</span>
            </div>
          </div>
          <div className={styles["contact__row"]}>
            <div className={styles["row__label"]}>Address</div>
            <div className={styles["row__content"]}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus incidunt exercitationem ab adipisci.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogDetails;
