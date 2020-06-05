import React from 'react';
import styled, {withTheme} from 'styled-components';
import Input from '../Atoms/input';
import Icon from '../Atoms/icon';
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FlexCenter } from '../../Theme/mixins';

const StyledInputPanel = styled.form`
    ${FlexCenter};
    width: 100%;
    height: 45px;
    padding: 0 1rem;
    box-shadow: 0px -1px 5px rgba(0, 0, 0, 0.3);

`
const InputPanel = ({ theme, handleFunction }) => {
    return (
        <StyledInputPanel onSubmit = {(e) => handleFunction(e)}>
            <Input 
                styles={{ margin: ".25em 0" }} 
            />
            <Icon
                icon={faPaperPlane}
                color={theme.colors.secondaryGreen}
                fontSize={theme.fontSizes.md}
                margin={"0 0 0 .5rem"}
            />
        </StyledInputPanel>
    )
}

export default withTheme(InputPanel);


