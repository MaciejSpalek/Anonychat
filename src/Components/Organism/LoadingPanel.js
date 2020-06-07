import React from 'react';
import styled from 'styled-components';
import Spinner from '../Atoms/Spinner';
import { FlexCenter } from '../../Theme/mixins';

const StyledContainer = styled.div`
    ${FlexCenter}
    flex-direction: column;
    height: 100%;
`
const StyledParagraph = styled.p`
    color: ${({theme}) => theme.colors.primaryRed};
    font-weight: ${({theme}) => theme.fontWeights.bold};
`
const LoadingPanel = () => {
    return (
        <StyledContainer>
           <Spinner />
           <StyledParagraph>
               Please wait
           </StyledParagraph>
        </StyledContainer>
    )
}

export default LoadingPanel;
