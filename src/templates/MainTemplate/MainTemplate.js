import React from 'react';
import { StyledContainer } from '../GlobalTemplate/GlobalTemplate.styled'

const MainTemplate = ({ children }) => (
    <StyledContainer>
        {children}
    </StyledContainer>
);

export default MainTemplate;