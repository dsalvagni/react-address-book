import React from "react";

import styles from "./InlineGridItem.module.scss";
const InlineGridItem = ({ children }) => {
  return <div className={styles["inline-grid__item"]}>{children}</div>;
};

export default InlineGridItem;
