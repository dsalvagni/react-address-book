import React from "react";

import styles from "./Search.module.scss";

import Icon from "components/Icon/Icon";

const Search = () => {
  return (
    <form>
      <div className={styles.search}>
        <Icon name="search" size={22} className={styles.seach__icon} />
        <input type="search" placeholder="Search" />
      </div>
    </form>
  );
};

export default Search;
