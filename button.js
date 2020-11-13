import React from "react";
import PropTypes from "prop-types";
//import "../assets/styles.less";

const Button = ({ value, onClick, styleClass }) => (
  <button
    className={`customButton ${styleClass}`}
    onClick={(event) => onClick(event)}
  >
    {value}
  </button>
);

Button.propTypes = {
  styleClass: PropTypes.string,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  styleClass: "",
};

export default Button;
