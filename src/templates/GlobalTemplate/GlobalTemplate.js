import React from 'react';
import GlobalStyle from 'theme/globalStyle';
import SocketClient from 'socketClient/socketClient'
import { theme } from 'theme/theme';
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