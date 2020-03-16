import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';

const TextareaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-bottom: 40px;
  position: relative;
  
  textarea {
    border-radius: 4px;
    background-color: transparent;
    border: 1px solid #888;
    color: #555;
    padding: 10px;
    height: 200px;
    
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

const TextareaField = ({
  name,
  placeholder,
  onChange,
  onBlur,
  value,
  touched,
  errors,
}) => (
  <TextareaWrapper>
    <textarea
      className={errors[name] && touched[name] ? 'error' : ''}
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
  </TextareaWrapper>
);

TextareaField.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  value: PropTypes.string,
  touched: PropTypes.object,
  errors: PropTypes.object,
};

export default TextareaField;
