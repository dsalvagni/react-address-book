import React from "react";
import PropTypes from "prop-types";

import styles from "./CatalogWrapper.module.scss";

/**
 * Wrapper for the users' catalog
 * It has two layout states:
 *  * normal - full width on all screen resolutions
 *  * compact - full width on tablet & mobile, however, with a blur effect as a modal is expected
 *            - 60vw on desktop, without the blur effect
 * Stateless
 */
const CatalogWrapper = props => {
  const cssClasses = [styles["catalog"]];
  if (props.isCompact) cssClasses.push(styles["catalog--compact"]);
  return <div className={cssClasses.join(" ")}>{props.children}</div>;
};

CatalogWrapper.defaultProps = {
  isCompact: false
};

CatalogWrapper.propTypes = {
  /** Toggles the compact style */
  isCompact: PropTypes.bool
};

export default CatalogWrapper;
