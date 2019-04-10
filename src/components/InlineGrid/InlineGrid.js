import React from "react";

import styles from "./InlineGrid.module.scss";
const InlineGrid = ({ children }) => {
  return <div className={styles["inline-grid"]}>{children}</div>;
};

export default InlineGrid;
