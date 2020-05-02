import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from '../Components/Organism/navbar'
import Home from './home';
import Chat from './chat';
import MainTemplate from '../Templates/mainTemplate'


const App = () => {
  return (
      <MainTemplate>
        <Router>  
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/chat" component={Chat} />
          </Switch>
        </Router> 
      </MainTemplate>
  );
}

export default App;
