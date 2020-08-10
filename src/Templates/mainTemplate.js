import React from 'react';
import styled from 'styled-components';

const Container = styled.main`
    width: 100%;
    height: 100%;
`

const MainTemplate = ({ children }) => (
    <Container>
        {children}
    </Container>
);

export default MainTemplate;