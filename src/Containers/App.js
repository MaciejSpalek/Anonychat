import React from 'react';
import MainTemplate from '../Templates/mainTemplate';
import Navbar from '../Components/Organism/navbar';
import Home from './home';
import Chat from './chat';
import ComponentError from './ErrorView';
import StatisticsPanel from '../Components/Organism/StatisticsPanel';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
      <MainTemplate>
        <Router>  
          <Navbar />
          <StatisticsPanel />
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
