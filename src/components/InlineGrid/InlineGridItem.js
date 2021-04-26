import React from "react";
import PropTypes from "prop-types";

import styles from "./InlineGridItem.module.scss";

/**
 * Represents a column of <InlineGrid />
 * Stateless
 */
const InlineGridItem = ({ children }) => {
  return <div className={styles["inline-grid__item"]}>{children}</div>;
};

InlineGridItem.propTypes = {
  /** Set the content of the grid item*/
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

export default InlineGridItem;
