import React from 'react';
import styled, { withTheme } from 'styled-components'
import Paragraph from '../Atoms/paragraph';
import { FlexCenter } from '../../Theme/mixins';

const StyledContainer = styled.div`
    ${FlexCenter};
    justify-content: flex-end;
    position: fixed;
    bottom: 0;
    height: 30px;
    background-color: ${({theme}) => theme.colors.secondaryGreen};
    color: ${({theme}) => theme.colors.primaryWhite};
    padding: .5rem;
`
const InfoSection = ({theme}) => {
    return (
        <StyledContainer>
            <Paragraph 
                fontSize={theme.fontSizes.sm} 
                fontWeight={theme.fontWeights.bold} 
                color={theme.colors.primaryWhite}
                text={`Online: ${10}`} 
            />
        </StyledContainer>
    )
}

export default withTheme(InfoSection);
