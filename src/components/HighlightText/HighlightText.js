import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styles from "./HighlightText.module.scss";
/**
 * Highlights parts of a texts for a given string
 * Stateless
 */
const HighlightText = ({ text, highlight }) => {
  function getHighlightedText(text, highlight) {
    if (!highlight) return <Fragment>{text}</Fragment>;
    if (!text) return null;
    const query = new RegExp(`(${highlight})`, "gim");
    const parts = text.split(query);
    return parts.map((part, i) =>
      part.toLowerCase() === highlight.toLowerCase() ? (
        <span key={i} className={styles.highlighted}>
          {part}
        </span>
      ) : (
        <Fragment key={i}>{part}</Fragment>
      )
    );
  }

  return getHighlightedText(text, highlight);
};

HighlightText.propTypes = {
  /** Multiline text */
  text: PropTypes.string,
  /** String to be replaced with a highlight style */
  highlight: PropTypes.string
};

export default HighlightText;
