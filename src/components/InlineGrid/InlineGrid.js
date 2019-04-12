import React from "react";
import PropTypes from "prop-types";

import styles from "./InlineGrid.module.scss";

/**
 * Wrapper component for a grid based on inline-block elements.
 *
 * Stateless
 */
const InlineGrid = ({ children }) => {
  return <div className={styles["inline-grid"]}>{children}</div>;
};

InlineGrid.propTypes = {
  /** Expects InlineGridItem[] */
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

export default InlineGrid;
