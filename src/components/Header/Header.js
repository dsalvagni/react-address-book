import React from "react";

import styles from "./Header.module.scss";

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

export default Header;
