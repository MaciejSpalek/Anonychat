import React from 'react';
import CharactersParagraph from 'Components/Atoms/CharactersParagraph/CharactersParagraph';
import Label from 'Components/Atoms/Label';

import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { 
    StyledIconButton,
    StyledContainer, 
    StyledWrapper,
    StyledInput,
    StyledForm
} from './InputBar.styled';


const InputBar = ({ onSubmit }) => {
    return (
        <StyledContainer >
            <StyledWrapper>
                <CharactersParagraph />
            </StyledWrapper>
            <StyledForm onSubmit={onSubmit}>
                <Label _for="messageInput" />
                <StyledInput />
                <StyledIconButton icon={faPaperPlane} />
            </StyledForm>
        </StyledContainer>
    )
}

export default InputBar;


