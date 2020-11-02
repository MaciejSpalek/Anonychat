import React from 'react';
import Spinner from 'Components/Atoms/Spinner'
import { StyledContainer, StyledParagraph } from './LoadingPanel.styled'

const LoadingPanel = ({ description }) => {
    return (
        <StyledContainer>
            <Spinner /> 
            <StyledParagraph text={description} />
        </StyledContainer>
    )
}

export default LoadingPanel;
