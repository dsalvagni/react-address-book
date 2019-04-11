import React from "react";

import styles from "./CatalogFooter.module.scss";

const CatalogFooter = ({ status }) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__status}>{status}</div>
    </footer>
  );
};

export default CatalogFooter;
