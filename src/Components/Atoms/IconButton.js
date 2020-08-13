import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FlexCenter } from '../../Theme/mixins';

const StyledButton = styled.button`
    ${FlexCenter};
    width: auto;
    border: none;
    padding: ${({theme}) => theme.fontSizes.xxxs};
    background-color: transparent;
`

const StyledIcon = styled(FontAwesomeIcon)`
    font-size: ${({theme}) => theme.fontSizes.lg};
    color: ${({theme}) => theme.colors.primaryRed};
`

const IconButton = ({ 
    handleFunction, 
    isDisabled, 
    children, 
    fontSize, 
    margin, 
    color, 
    icon, 
}) => {
    return (
        <StyledButton onClick={(e)=> handleFunction(e)} disabled={isDisabled}>
            <StyledIcon 
                icon={icon}
                style={{
                    fontSize: fontSize,
                    color: color,
                    margin: margin
                }}
            />
            { children }
        </StyledButton>
    )
}

export default IconButton;