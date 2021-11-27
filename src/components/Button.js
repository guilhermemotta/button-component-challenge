import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./Button.css";

export const Button = (props) => {
  const { variant, color, label, disableShadow, disabled } = props;

  const classes = classNames("button", {
    "button--color-default": !color,
    "button--variant-outline": variant === "outline",
    "button--variant-text": variant === "text",
    "button--disable-shadow":
      disableShadow || variant === "outline" || variant === "text",
    "button--disabled": disabled,
    "button--color-primary": color === "primary",
    "button--color-secondary": color === "secondary",
    "button--color-danger": color === "danger",
  });

  return (
    <button type="button" className={classes} {...props}>
      <span className="label">{label}</span>
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.string,
  label: PropTypes.string,
  disableShadow: PropTypes.bool,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  variant: "default",
  color: "default",
  label: "Default",
  disableShadow: false,
  onClick: undefined,
};
