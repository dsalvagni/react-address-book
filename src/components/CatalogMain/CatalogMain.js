import React from "react";

import styles from "./CatalogMain.module.scss";

const CatalogMain = ({ children }) => {
  return (
    <main className={styles.main}>
      <section className={styles.main__content}>{children}</section>
    </main>
  );
};

export default CatalogMain;
