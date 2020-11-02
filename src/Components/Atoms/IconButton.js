import React from 'react';
import styled from 'styled-components';
import { FlexCenter } from 'Theme/mixins';
import Icon from 'Components/Atoms/Icon';

const StyledButton = styled.button`
    ${FlexCenter};
    width: auto;
    border: none;
`

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
}

export default IconButton;