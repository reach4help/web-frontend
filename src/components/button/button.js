import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #62a0ff;
  border-radius: 4px;
  padding: 10px 40px;
  color: #fff;
`;

const Button = ({ children, disabled, type }) => (
  <StyledButton
    type={type}
    disabled={disabled}
  >
    {children}
  </StyledButton>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  type: 'button',
  disabled: false,
};

export default Button;
