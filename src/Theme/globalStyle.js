import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html {
    font-size: 62.5%;
  }
  body {
    position: relative;
    margin: 0;
    font-size: 1.6rem;
    font-family: 'Montserrat';
    overflow-x: hidden;
  }
  a {
    text-decoration: none;
  }
  ul {
    padding: 0;
    list-style: none;
  }
`;

export default GlobalStyle;
