import React from "react";
import PropTypes from "prop-types";

import styles from "./CatalogWrapper.module.scss";

const CatalogWrapper = props => {
  const cssClasses = [styles["catalog"]];
  if (props.isCompact) cssClasses.push(styles["catalog--compact"]);
  return <div className={cssClasses.join(" ")}>{props.children}</div>;
};

CatalogWrapper.propTypes = {
  isCompact: false
};

CatalogWrapper.propTypes = {
  isCompact: PropTypes.bool
};

export default CatalogWrapper;
