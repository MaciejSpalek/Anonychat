import React from 'react';
import styled, {withTheme} from 'styled-components';
import Input from '../Atoms/input';
import IconButton from '../Atoms/IconButton';
import LettersParagraph from '../Atoms/lettersParagraph';
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FlexCenter } from '../../Theme/mixins';
import Label from '../Atoms/label';

const StyledInputPanel = styled.div`
    ${FlexCenter};
    flex-direction: column;
`

const StyledTopWrapper = styled.div`
    ${FlexCenter};
    justify-content: flex-start;
    border-bottom: .15rem solid ${({theme}) => theme.colors.primaryGray};
    padding: .5rem;
`
const StyledForm = styled.form`
    ${FlexCenter};
    padding: .5rem;
`

const InputPanel = ({ theme, handleFunction }) => {
    return (
        <StyledInputPanel >
            <StyledTopWrapper>
                <LettersParagraph />
            </StyledTopWrapper>
            <StyledForm onSubmit = {(e) => handleFunction(e)}>
                <Label _for="messageInput" />
                <Input styles={{ margin: ".25em 0" }} />
                <IconButton
                    handleFunction={()=> {}}
                    icon={faPaperPlane}
                    color={theme.colors.primaryRed}
                    fontSize={theme.fontSizes.md}
                    margin={"0 0 0 .5rem"}
                />
            </StyledForm>
        </StyledInputPanel>
    )
}

export default withTheme(InputPanel);


