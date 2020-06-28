import React from 'react';
import styled from 'styled-components'

const StyledParagraph = styled.h1`
    font-weight:  ${props => props.fontWeight};
    font-size:    ${props => props.fontSize};
    font-family:  ${props => props.fontFamily};
    align-self:   ${props => props.align};
    margin:       ${props => props.margin};
    color:        ${props => props.color};
    line-height:  ${props => props.lineHeight};
`
const Paragraph = ({ color, fontSize, fontWeight, fontFamily, text, align, margin, lineHeight }) => {
    return (
        <StyledParagraph 
            fontSize={fontSize}
            fontWeight={fontWeight} 
            fontFamily={fontFamily}
            lineHeight={lineHeight}
            alignSelf={align}
            margin={margin}
            color={color}>
            {text}
        </StyledParagraph>
    )
}

export default Paragraph;