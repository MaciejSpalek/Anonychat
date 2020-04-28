import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const StyledContainer = styled.div`
    font-size:  ${theme => theme.fontSize};
    color: ${theme => theme.color};
`
const Icon = ({ icon, color, fontSize }) => {
    return (
        <StyledContainer 
            color={color}
            fontSize={fontSize}>
            <FontAwesomeIcon icon={icon} />
        </StyledContainer>
    )
}

export default Icon;