import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FlexCenter } from '../../Theme/mixins';
import { Link } from 'react-router-dom'

const StyledLink = styled(Link)`
    ${FlexCenter};
    border: none;
    padding: ${({theme}) => theme.fontSizes.xxxs};
`

const StyledIcon = styled(FontAwesomeIcon)`
    font-size: ${({theme}) => theme.fontSizes.lg};
    color: ${({theme}) => theme.colors.primaryRed};
`

const IconLink = ({ 
    to, 
    icon, 
    color, 
    fontSize, 
    margin, 
    handleFunction 
}) => {
    return (
        <StyledLink 
            to={to} 
            onClick={handleFunction}>
            <StyledIcon 
                icon={icon}
                style={{
                    fontSize: fontSize,
                    color: color,
                    margin: margin
                }}
            />
        </StyledLink>
    )
}

export default IconLink;