import React from "react";

import styles from "./CatalogFooter.module.scss"

const CatalogFooter = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__status}>Showing 10 of 20 contacts</div>
    </footer>
  );
};

export default CatalogFooter;
