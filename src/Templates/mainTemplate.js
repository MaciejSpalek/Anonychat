import React from 'react';
import GlobalStyle from '../Theme/globalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from '../Theme/theme';
import styled from 'styled-components';
import SocketClient from '../SocketClient/socketClient'

const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: black;
`

const MainTemplate = ({ children }) => (
  <Container>
    <GlobalStyle />        
    <SocketClient />
    <ThemeProvider theme={theme}>
        {children}
    </ThemeProvider>
  </Container>
);

export default MainTemplate;