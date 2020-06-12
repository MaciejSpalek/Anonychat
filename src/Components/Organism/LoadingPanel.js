import React from 'react';
import styled from 'styled-components';
import { FlexCenter } from '../../Theme/mixins';
import Spinner from '../Atoms/Spinner'

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
            <Spinner /> 
            <StyledParagraph> Wait for user</StyledParagraph>
        </StyledContainer>
    )
}

export default LoadingPanel;
