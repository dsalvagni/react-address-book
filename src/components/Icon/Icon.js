import React, { Component } from "react";
import propTypes from "prop-types";

import ICONS from "./constants/Icons";
import styles from "./Icon.module.scss";

/**
 * Icons as React components
 *
 * @see https://medium.com/@david.gilbertson/icons-as-react-components-de3e33cb8792
 * @class Icon
 * @extends {Component}
 */
class Icon extends Component {
  render() {
    const props = this.props;
    const svgStyles = {
      svg: {
        display: "inline-block",
        verticalAlign: "middle"
      },
      path: {
        fill: props.color,
        strokeWidth: props.strokeWidth
      }
    };

    const icon = ICONS[props.name];
    const cssClasses = [`Icon Icon--${props.name}`];
    if (props.className) cssClasses.push(props.className);
    if (props.spinning) cssClasses.push(styles.spinning);
    return (
      <svg
        className={cssClasses.join(" ")}
        style={svgStyles.svg}
        width={`${props.size}px`}
        height={`${props.size}px`}
        viewBox="0 0 80 80"
      >
        <path style={svgStyles.path} d={icon} />
      </svg>
    );
  }
}
Icon.propTypes = {
  name: propTypes.string.isRequired,
  size: propTypes.number,
  color: propTypes.string,
  strokeWidth: propTypes.string,
  spinning: propTypes.bool
};

Icon.defaultProps = {
  size: 16
};

export default Icon;
