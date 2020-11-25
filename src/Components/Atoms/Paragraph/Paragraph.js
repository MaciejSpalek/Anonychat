import React from 'react';
import PropTypes from 'prop-types';
import { StyledParagraph } from './Paragraph.styled';

const Paragraph = ({ text, ...props }) => {
    return (
        <StyledParagraph {...props}>
            {text}
        </StyledParagraph>
    )
}

export default Paragraph;

Paragraph.propTypes = {
    text: PropTypes.string.isRequired,
}
