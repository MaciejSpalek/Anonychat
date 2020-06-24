import React from 'react';
import styled, {withTheme} from 'styled-components';
import Input from '../Atoms/input';
import IconButton from '../Atoms/IconButton';
import LettersParagraph from '../Atoms/lettersParagraph';
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FlexCenter } from '../../Theme/mixins';

const StyledInputPanel = styled.form`
    ${FlexCenter};
    flex-direction: column;
`

const StyledTopWrapper = styled.div`
    ${FlexCenter};
    justify-content: flex-end;
    border-bottom: .15rem solid ${({theme}) => theme.colors.primaryBlue};
    padding: .5rem;
`
const StyledBottomWrapper = styled.div`
    ${FlexCenter};
    padding: .5rem;
`

const InputPanel = ({ theme, handleFunction }) => {
    return (
        <StyledInputPanel onSubmit = {(e) => handleFunction(e)}>
            <StyledTopWrapper>
                <LettersParagraph />
            </StyledTopWrapper>
            <StyledBottomWrapper>
                <Input 
                    styles={{ margin: ".25em 0" }} 
                />
                <IconButton
                    handleFunction={()=> {}}
                    icon={faPaperPlane}
                    color={theme.colors.primaryRed}
                    fontSize={theme.fontSizes.md}
                    margin={"0 0 0 .5rem"}
                />
            </StyledBottomWrapper>
        </StyledInputPanel>
    )
}

export default withTheme(InputPanel);


