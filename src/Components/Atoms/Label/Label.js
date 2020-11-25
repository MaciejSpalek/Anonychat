import React from 'react';
import PropTypes from 'prop-types';
import { StyledLabel } from './Label.styled';

const Label = ({ text, _for }) => {
    return (
        <StyledLabel 
            htmlFor={_for}
            name={text}
        />
    )
}

export default Label;

Label.propTypes = {
    text: PropTypes.string,
    _for: PropTypes.string
}
