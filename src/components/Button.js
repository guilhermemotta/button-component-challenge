import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./Button.css";

export const Button = ({
  variant,
  color,
  label,
  disableShadow,
  disabled,
  startIcon,
  endIcon,
  ...props
}) => {
  const buttonClasses = classNames("button", {
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
    <button type="button" className={buttonClasses} {...props}>
      {startIcon && <span className="material-icons">{startIcon}</span>}
      <span className="button__label">{label}</span>
      {endIcon && <span className="material-icons">{endIcon}</span>}
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
