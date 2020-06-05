import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
    width: 100%;
    height: 100%;
    border: none;
    font-size: ${({theme}) => theme.fontSizes.sm};
    
    &::placeholder {
        font-size: ${({theme}) => theme.fontSizes.sm}
    }
`

const Input = ({ styles }) => {
    return (
        <StyledInput 
            type={"text"}
            style={styles}
            name={"messageInput"}
            placeholder={"Send message..."}
        />
    )
}

export default Input;