import React from "react";
import PropTypes from "prop-types";

import styles from "./Thumbnail.module.scss";

/**
 * Display an image from a given URL in profile-picture format
 * Stateless
 */
const Thumbnail = ({ size, url, className }) => {
  const cssClass = [styles.thumbnail];
  if (className) cssClass.push(className);

  if (!url) return null;

  return (
    <div className={cssClass.join(" ")} style={{ maxWidth: size }}>
      <img src={url} alt="profile thumbnail" />
    </div>
  );
};

Thumbnail.defaultProps = {
  size: "128px"
};

Thumbnail.propTypes = {
  /** Max size of the image */
  size: PropTypes.string,
  /** Image url */
  url: PropTypes.string.isRequired,
  /** CSS classes are available for the thumbnail wrapper */
  className: PropTypes.string
};

export default Thumbnail;
