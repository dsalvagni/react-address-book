import React from "react";

import styles from "./Catalog.module.scss";

const Catalog = ({ children }) => {
  const cssClasses = [styles["catalog"], styles["catalog--compact"]];
  return <div className={cssClasses.join(" ")}>{children}</div>;
};

export default Catalog;
