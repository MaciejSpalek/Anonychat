import React from 'react';
import styled from 'styled-components'

const StyledParagraph = styled.p`
    font-size:  ${theme => theme.fontWeight};
    font-size:  ${theme => theme.fontSize};
    align-self: ${theme => theme.align};
    margin:     ${theme => theme.margin};
    color:      ${theme => theme.color};
    line-height:${theme => theme.lineHeight};
`
const Paragraph = ({ color, fontSize, fontWeight, text, align, margin, lineHeight }) => {
    return (
        <StyledParagraph 
            fontSize={fontSize}
            fontWeight={fontWeight} 
            lineHeight={lineHeight}
            alignSelf={align}
            margin={margin}
            color={color}>
            {text}
        </StyledParagraph>
    )
}

export default Paragraph;