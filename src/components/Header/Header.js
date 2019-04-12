import React from "react";
import PropTypes from "prop-types";

import styles from "./Header.module.scss";

/**
 * Wrapper for the App's header
 * Stateless
 */
const Header = ({ children, rightContent, leftContent }) => {
  const getHeaderCenterCssClass = (right, left) => {
    const cssCenter = [styles.header__center];

    if (right && left) cssCenter.push(styles["header__center--compact"]);
    else if (right || left) cssCenter.push(styles["header__center--one-side"]);
    return cssCenter.join(" ");
  };

  return (
    <header className={styles.header}>
      {leftContent ? (
        <span className={styles.header__left}>{leftContent}</span>
      ) : null}
      <span className={getHeaderCenterCssClass(rightContent, leftContent)}>
        {children}
      </span>
      {rightContent ? (
        <span className={styles.header__right}>{rightContent}</span>
      ) : null}
    </header>
  );
};

Header.propTypes = {
  /** Childrens are going be placed in the center*/
  children: PropTypes.object,
  /** Usually an icon to be placed right */
  rightContent: PropTypes.object,
  /** Usually an icon to be placed left */
  leftContent: PropTypes.object,
}

export default Header;
