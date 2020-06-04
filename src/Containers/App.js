import React from 'react';
import MainTemplate from '../Templates/mainTemplate'
import Navbar from '../Components/Organism/navbar'
import Home from './Home';
import Chat from './Chat';
import ComponentError from './ErrorView';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
      <MainTemplate>
        <Router>  
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/chat" component={Chat} />
            <Route component={ComponentError} />
          </Switch>
        </Router> 
      </MainTemplate>
  );
}

export default App;
