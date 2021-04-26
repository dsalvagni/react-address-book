import React from "react";
import PropTypes from "prop-types";

import Config from "config";

/**
 * Generated an element with an emoji flag
 * Stateless
 */
const Flag = ({ nationality, className }) => {
  const selected = Config.nationalities.find(
    n => n.key === (nationality && nationality.toLowerCase())
  );
  if (!selected) return null;
  return <span className={className}>{selected.flag}</span>;
};

Flag.propTypes = {
  /** 2 letters nationality abbr. from Config file */
  nationality: PropTypes.string.isRequired,
  /** CSS classes are available */
  className: PropTypes.string
};

export default Flag;
