import React from 'react';
import PropTypes from 'prop-types';
import { 
    StyledContainer, 
    StyledIcon, 
    StyledText 
} from './Parameter.styled';

const Parameter = ({ 
    variable, 
    icon, 
    text
}) => {
    const getText = () => `${text}: ${variable}`;
    return (
        <StyledContainer>
            <StyledIcon icon={icon} />
            <StyledText> { getText() } </StyledText>
        </StyledContainer>
    )
}

export default Parameter;

Parameter.propTypes = {
    icon: PropTypes.object,
    variable: PropTypes.number,
    text: PropTypes.string
}