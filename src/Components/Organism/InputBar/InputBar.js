import React from 'react';
import LettersParagraph from 'Components/Atoms/lettersParagraph';
import Label from 'Components/Atoms/label';

import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { 
    StyledIconButton,
    StyledContainer, 
    StyledWrapper,
    StyledInput,
    StyledForm
} from './InputBar.styled';


const InputBar = ({ handleFunction }) => {
    return (
        <StyledContainer >
            <StyledWrapper>
                <LettersParagraph />
            </StyledWrapper>
            <StyledForm onSubmit = {(e) => handleFunction(e)}>
                <Label _for="messageInput" />
                <StyledInput />
                <StyledIconButton
                    icon={faPaperPlane}
                />
            </StyledForm>
        </StyledContainer>
    )
}

export default InputBar;


