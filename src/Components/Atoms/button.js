import React from 'react';
import styled from 'styled-components'
import { FlexCenter } from '../../Theme/mixins';
import { Link } from 'react-router-dom';

const StyledButton = styled.button`
    ${FlexCenter};
    height: 50px;
    width: 200px;
    border-radius: .5rem;
    font-size: ${({theme}) => theme.fontSizes.md};
    font-weight: ${({theme}) => theme.fontWeights.bold};
    color: ${({theme}) => theme.colors.primaryRed};
    background-color: ${({theme}) => theme.colors.primaryBlue};
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
    margin: ${props => props.margin};
    padding: .5rem;
`

const StyledLink = styled(Link)`
    &:hover {
            text-decoration: none;
        }
`
const Button = ({ route, text, handleClick, margin }) => {
    return (
        <StyledLink to={`/${route}`}>
            <StyledButton 
                onClick={()=> handleClick()}
                margin={margin}
            >
                {text}
            </StyledButton>
        </StyledLink>
    )
}

export default Button;
