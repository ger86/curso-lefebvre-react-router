import React from "react";
import PropTypes from 'prop-types';
import {StyledButton} from './styled';

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  size: PropTypes.string.isRequired,
};

Button.defaultProps = {
  onClick: null
};

Button.defaultProps = {
  size: 'lg'
};

export default function Button({ text, onClick, size }) {
  return (
    <StyledButton onClick={onClick} size={size}>
      {text}
    </StyledButton>
  );
}
