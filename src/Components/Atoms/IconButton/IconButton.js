import React from 'react';
import Icon from 'Components/Atoms/Icon';
import { StyledButton } from './IconButton.styled';

const IconButton = ({ 
    handleFunction, 
    isDisabled, 
    icon,
    ...props
}) => {
    return (
        <StyledButton onClick={handleFunction} disabled={isDisabled} {...props}>
            <Icon icon={icon} />
        </StyledButton>
    )
};

export default IconButton;