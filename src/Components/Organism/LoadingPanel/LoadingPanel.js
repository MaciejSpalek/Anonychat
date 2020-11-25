import React from 'react';
import PropTypes from 'prop-types';
import Spinner from 'Components/Atoms/Spinner';
import { StyledContainer, StyledParagraph } from './LoadingPanel.styled';

const LoadingPanel = ({ description }) => {
    return (
        <StyledContainer>
            <Spinner /> 
            <StyledParagraph text={description} />
        </StyledContainer>
    );
};

export default LoadingPanel;


LoadingPanel.propTypes = {
    description: PropTypes.string.isRequired
}