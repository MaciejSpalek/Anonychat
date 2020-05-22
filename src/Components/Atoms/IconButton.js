import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
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
    color: ${({theme}) => theme.colors.primaryGreen};
`

const IconButton = ({ icon }) => {
    return (
        <StyledButton>
            <StyledIcon icon={icon} />
        </StyledButton>
    )
}

export default IconButton;