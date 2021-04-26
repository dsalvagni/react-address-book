import React from "react";
import PropTypes from "prop-types";

import styles from "./CatalogFooter.module.scss";

/**
 * Wrapps the catalog footer in a single component, as this
 * can be useful to reuse in other type of view for the same catalog,
 * in the case that it needs to show a status message. Just a matter of consistency.
 * Stateless
 */
const CatalogFooter = ({ status }) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__status}>{status}</div>
    </footer>
  );
};

CatalogFooter.propTypes = {
  /** Status message to be displayed*/
  status: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
};

export default CatalogFooter;
