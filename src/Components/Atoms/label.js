import React from 'react';
import styled from 'styled-components';

const StyledLabel = styled.label`
    width: auto;
    height: 100%;
    font-size: ${({theme}) => theme.fontSizes.sm};
`

const Label = ({ styles, text, _for }) => {
    return (
        <StyledLabel 
            htmlFor={_for}
            style={styles}
            name={text}
        />
    )
}

export default Label;