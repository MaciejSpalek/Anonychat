import React from 'react';
import GlobalTemplate from '../Templates/GlobalTemplate';
import MainTemplate from '../Templates/MainTemplate';
import Navbar from '../Components/Organism/navbar';
import Home from './Home';
import Chat from './Chat/Chat';
import ErrorPage from './ErrorPage';
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
              <Route component={ErrorPage} />
            </Switch>
          </MainTemplate> 
          <StatisticsPanel />
        </Router> 
      </GlobalTemplate>
  );
}

export default App;
