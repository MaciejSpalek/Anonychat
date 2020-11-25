import React from 'react';
import { StyledButton } from './Button.styled';
import PropTypes from 'prop-types';

const Button = ({ 
    text, 
    onClick,
    ...props
}) => {
    return (
        <StyledButton onClick={onClick} {...props}>
            {text}
        </StyledButton>
    )
};

export default Button;

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
}
