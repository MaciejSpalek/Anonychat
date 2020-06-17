import React from 'react';
import styled from 'styled-components'
import { useSelector } from 'react-redux';

const StyledParagraph = styled.p`
    font-size: ${({theme}) => theme.fontSizes.sm};
    color: ${({theme}) => theme.colors.primaryRed};
    padding: 0;
    line-height: 1;
`
const Paragraph = () => {
    const amountOfWords = useSelector(state => state.statuses.amountOfLetters)
    return (
        <StyledParagraph>
            {`${amountOfWords}/200`}
        </StyledParagraph>
    )
}

export default Paragraph;