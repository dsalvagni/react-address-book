import React from "react";
import Search from "components/Search/Search";
import Icon from "components/Icon/Icon";

import styles from "./CatalogHeader.module.scss";

const CatalogHeader = () => {
  return (
    <header className={styles.header}>
      <Search />
      <a href="#" className={styles.header__button}>
        <Icon name="settings" size={24} />
      </a>
    </header>
  );
};

export default CatalogHeader;
