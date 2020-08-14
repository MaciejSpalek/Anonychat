import React from 'react';
import GlobalTemplate from '../Templates/GlobalTemplate';
import MainTemplate from '../Templates/mainTemplate';
import Navbar from '../Components/Organism/navbar';
import Home from './home';
import Chat from './chat';
import ComponentError from './ErrorView';
import StatisticsPanel from '../Components/Organism/StatisticsPanel';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
      <GlobalTemplate>
        <Router>  
          <Navbar />
          <MainTemplate>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/chat" component={Chat} />
              <Route component={ComponentError} />
            </Switch>
          </MainTemplate> 
          <StatisticsPanel />
        </Router> 
      </GlobalTemplate>
  );
}

export default App;
