import React from 'react';
import GlobalStyle from 'Theme/globalStyle';
import SocketClient from 'SocketClient/socketClient'
import { theme } from 'Theme/theme';
import { ThemeProvider } from 'styled-components';
import { StyledContainer } from './GlobalTemplate.styled'; 

const GlobalTemplate = ({ children }) => (
  <StyledContainer>
    <GlobalStyle />        
    <SocketClient />
    <ThemeProvider theme={theme}>
        {children}
    </ThemeProvider>
  </StyledContainer>
);

export default GlobalTemplate;