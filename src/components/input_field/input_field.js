import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-bottom: 40px;
  position: relative;
  
  input {
    border-radius: 4px;
    background-color: transparent;
    border: 1px solid #888;
    color: #555;
    height: 50px;
    padding: 0 10px;
    
    &.error {
      border: 1px solid #DE7976;
    }
  }
  
  p.error {
    position: absolute;
    bottom: -10px;
    color: red;
    font-size: 80%;
  }
`;

const InputField = ({
  type,
  name,
  placeholder,
  onChange,
  onBlur,
  value,
  touched,
  errors,
}) => (
  <InputWrapper>
    <input
      className={errors[name] && touched[name] ? 'error' : ''}
      type={type}
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
    />
    {
      errors[name] && touched[name] && (
        <p className="error">
          {errors[name]}
        </p>
      )
    }
  </InputWrapper>
);

InputField.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  value: PropTypes.string,
  touched: PropTypes.object,
  errors: PropTypes.object,
};

InputField.defaultProps = {
  type: 'text',
};

export default InputField;
