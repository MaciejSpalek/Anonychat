import React from 'react';
import { StyledButton } from './Button.styled';


const Button = ({ 
    text, 
    handleOnClick,
    ...props
}) => {
    return (
        <StyledButton onClick={()=> handleOnClick()} {...props}>
            {text}
        </StyledButton>
    )
};

export default Button;
