import React, { useEffect, useState } from 'react';
import MainTemplate from '../Templates/mainTemplate'
import Navbar from '../Components/Organism/navbar'
import Home from './Home';
import Chat from './Chat';
import ComponentError from './ErrorView';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { getStorageItem, setStorageItem } from '../Helpers/localStorage'
import { getGivenUser, addUser } from '../Helpers/requests';


const App = () => {
  const [ user, setUser ] = useState(getStorageItem("user"));

  // set your user and if they are not exist in LS save there
  const setStartData = async () => {
    if(!user) {
      await addUser()
        .then(({data}) => {
          getGivenUser(data.insertId)
          .then(({data}) => {
            setStorageItem('user', data[0])
            setUser(data[0])
          })
        })
    }
  }


  useEffect(() => {
    setStartData();
  }, [user])

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
