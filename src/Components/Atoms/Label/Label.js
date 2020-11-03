import React from 'react';
import { StyledLabel } from './Label.styled';

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