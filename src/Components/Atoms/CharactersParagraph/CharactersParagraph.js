import React from 'react';
import { useSelector } from 'react-redux';
import { StyledParagraph } from './CharactersParagraph.styled';

const CharactersParagraph = () => {
    const amountOfWords = useSelector(state => state.statuses.amountOfLetters);
    const getString = () => `${amountOfWords}/200`;

    return (
        <StyledParagraph>
            {getString()}
        </StyledParagraph>
    )
}

export default CharactersParagraph;