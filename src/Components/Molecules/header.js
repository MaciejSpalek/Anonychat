import React from 'react';
import styled, {withTheme} from 'styled-components';
import { FlexCenter } from '../../Theme/mixins';
import Paragraph from '../Atoms/paragraph';
import Heading from '../Atoms/heading';

const StyledContainer = styled.main`
    ${FlexCenter};
    flex-direction: column;
    background-color: ${({theme}) => theme.colors.primaryWhite};
    padding: 1rem;
    margin-bottom: 2rem;
` 
const Main = ({theme}) => {
    return (
        <StyledContainer>
            <Heading>
                Find somebody
            </Heading>
            <Paragraph 
                fontSize={theme.fontSizes.sm} 
                fontWeight={theme.fontWeights.bold} 
                color={theme.colors.primaryGray}
                text={"to talk"} 
            />
        </StyledContainer>
    )
}

export default withTheme(Main);