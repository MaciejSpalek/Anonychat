import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, 
  *::before, 
  *::after {  
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin:0;
    padding:0;
    outline:none;
  }

  button {
    border:none;
    background:none;
    cursor: pointer;
  }  

  html {
    font-size: 62.5%; 
  }
  
  body {
    width:100%;
    height:100vh;
    font-size: 1.6rem;
    font-family: "Montserrat", sans-serif;
    overflow-x:hidden;
    position:relative;
    margin:0;
    padding:0;
    outline:none;
  }

  a {
    text-decoration:none;
  }
`;

export default GlobalStyle;

