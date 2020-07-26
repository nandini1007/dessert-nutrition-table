import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import classList from './classList';
import './index.css';

interface InputRowPropTypes {
  onChange?: any,
  label?: any,
  value?: any,
  name?: string
};

function InputRow({ onChange, label, value, name  }:InputRowPropTypes ) {
  return (
    <div className="mt3">
      <label className="db fw6 lh-copy f6">{label}</label>
      <input
        value={value}
        name={name}
        onChange={(e) => {
          onChange(e.target.value)
        }}
        className="pa2 input-reset ba bg-transparent w-100"
        />
    </div>
  );
}

InputRow.propTypes = {
  children: PropTypes.any,
  type: PropTypes.string,
}
export default InputRow;
