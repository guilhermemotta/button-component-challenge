import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

export const Button = ({
  variant,
  color,
  label,
  disableShadow,
  ...props
}) => {
  const buttonClasses = ['button'];

  if (variant === 'outline') {
    buttonClasses.push(buttonVariantBuilder(variant));
    disableShadow = true;
  }

  if (variant === 'text') {
    buttonClasses.push(buttonVariantBuilder(variant));
    color = (props.disabled) ? 'default' : 'primary';
    disableShadow = true;
  }
  
  if (disableShadow) {
    buttonClasses.push(`button--disable-shadow`);
    color = 'primary';
  }

  if (props.disabled) {
    buttonClasses.push('button--disabled');
  }

  buttonClasses.push(`button--color-${color}`);
  
  return (
    <button
      type="button"
      className={buttonClasses.join(' ')}
      {...props}
    >
      <span className="label" >{label}</span>
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.string,
  label: PropTypes.string,
  disableShadow: PropTypes.bool,
  color: PropTypes.string,
  onClick: PropTypes.func,
}

Button.defaultProps = {
  variant: 'default',
  color: 'default',
  label: 'Default',
  disableShadow: false,
  onClick: undefined,
};

const classNameBuilder = (variant) => `button--variant-${variant}`;
