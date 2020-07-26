import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import classList from './classList';

interface ButtonPropTypes {
  children: ReactNode,
  type?: string,
  className?: string,
};

function Button({ type = 'primary', className = '', children, ...props }:ButtonPropTypes ) {
  const cls = `${classList[type]} ${className}`;
  return (
    <button className={cls} {...props}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.any,
  type: PropTypes.string,
}
export default Button;
