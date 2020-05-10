import React from 'react';
import styled from 'styled-components'
import { FlexCenter } from '../../Theme/mixins';
import { Link } from 'react-router-dom';
import { getStorageItem } from '../../Helpers/localStorage'

const StyledButton = styled.button`
    ${FlexCenter};
    height: 50px;
    width: 200px;
    border-radius: .5rem;
    font-size: ${({theme}) => theme.fontSizes.md};
    font-weight: ${({theme}) => theme.fontWeights.bold};
    color: ${({theme}) => theme.colors.primaryWhite};
    background-color: ${({theme}) => theme.colors.secondaryGreen};
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
    padding: .5rem;
`

const Button = ({ route, text, handleClick }) => {
    return (
        <Link to='/chatroom'>
            <StyledButton onClick={()=> handleClick()}>
                {text}
            </StyledButton>
        </Link>
    )
}

export default Button;
