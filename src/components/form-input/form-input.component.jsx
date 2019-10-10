import React from 'react';
import './form-input.component.scss';
import PropTypes from 'prop-types';

const FormInput = ({
  handleChange, label, name, ...otherProps
}) => (
  <div className="form-group">
    <label data-test="form-input-label" htmlFor="name">
      {
        label !== undefined ? 
          <span className={`form-input-label-text ${(otherProps.value && otherProps.value.length) > 0 ? 'shrink': ''}`}>{label}</span>
           : null
      }
      <input data-test="form-input-input" className="form-input" onChange={handleChange} name={name} {...otherProps} />
    </label>
  </div>
);

FormInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
export default FormInput;
