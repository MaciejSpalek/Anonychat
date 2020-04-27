import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './Theme/theme';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Containers/Navbar/navbar';
import Home from './Containers/Home/home';
import Chat from './Containers/Chat/chat';


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>  
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/chat" component={Chat} />
        </Switch>
      </Router> 
    </ThemeProvider>
  );
}

export default App;
