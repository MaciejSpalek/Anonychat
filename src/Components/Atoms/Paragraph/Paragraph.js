import React from 'react';
import { StyledParagraph } from './Paragraph.styled';

const Paragraph = ({ text, ...props }) => {
    return (
        <StyledParagraph {...props}>
            {text}
        </StyledParagraph>
    )
}

export default Paragraph;