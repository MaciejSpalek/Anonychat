import React from 'react';
import styled, { withTheme } from 'styled-components';
import { FlexCenter } from '../../Theme/mixins';
import Paragraph from '../Atoms/paragraph';
import Heading from '../Atoms/heading';
import Button from '../Atoms/button';

const StyledContainer = styled.header`
    ${FlexCenter};
    flex-direction: column;
    background-color: ${({theme}) => theme.colors.primaryWhite};
    padding: 1rem;
    margin-bottom: 2rem;
` 
const Header = ({theme}) => {
    return (
        <StyledContainer>
            <Heading>
                Find somebody
            </Heading>
            <Paragraph 
                fontSize={theme.fontSizes.md} 
                fontWeight={theme.fontWeights.bold} 
                color={theme.colors.primaryBlue}
                text={"to talk"} 
            />
            <Button 
                route={"chat"}
                handleClick={()=> {}}
                text={"Draw"}
            />
        </StyledContainer>
    )
}

export default withTheme(Header);