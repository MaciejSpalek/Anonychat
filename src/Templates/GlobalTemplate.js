import React from 'react';
import GlobalStyle from 'theme/globalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/theme';
import styled from 'styled-components';
import SocketClient from 'socketClient/socketClient'

const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: black;
`

const GlobalTemplate = ({ children }) => (
  <Container>
    <GlobalStyle />        
    <SocketClient />
    <ThemeProvider theme={theme}>
        {children}
    </ThemeProvider>
  </Container>
);

export default GlobalTemplate;