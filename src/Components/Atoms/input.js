import React from 'react';
import styled from 'styled-components';
import { updateAmountOfLetters } from '../../Redux/Actions/actions';
import { useDispatch } from 'react-redux';

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
    const dispatch = useDispatch();
    const updateValue = (e) => {
        dispatch(updateAmountOfLetters(e.target.value.length))
    }
    return (
        <StyledInput 
            onChange={(e)=> updateValue(e)}
            type={"text"}
            style={styles}
            name={"messageInput"}
            placeholder={"Send message..."}
            maxLength={200}
        />
    )
}

export default Input;