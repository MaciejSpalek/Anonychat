import React from 'react';
import styled from 'styled-components';
import { FlexCenter } from '../../Theme/mixins';

const StyledContainer = styled.div`
    ${FlexCenter}
    flex-direction: column;
    height: 100%;
`
const StyledParagraph = styled.h2`
    color: ${({theme}) => theme.colors.primaryRed};
    font-weight: ${({theme}) => theme.fontWeights.bold};
`
const LoadingPanel = () => {
    return (
        <StyledContainer>
           <StyledParagraph> The drawing user </StyledParagraph>
           <StyledParagraph> for you </StyledParagraph>
        </StyledContainer>
    )
}

export default LoadingPanel;
