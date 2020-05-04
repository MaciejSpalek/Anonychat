import React, { useEffect, useState } from 'react';
import MainTemplate from '../Templates/mainTemplate'
import Navbar from '../Components/Organism/navbar'
import Home from './home';
import Chat from './chat';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { getUserFromLocalStorage, setUserInLocalStorage } from '../Helpers/storageFunctions'
import { getUsers, addUser, getLastUser } from '../Helpers/requests';
import { generateToken } from '../Helpers/token';



const App = () => {
  const [ allUsers, setAllUsers ] = useState([])
  const [ user, setUser ] = useState(getUserFromLocalStorage());


  const setCurrentUser = async () => {
    if(!user) {
      await addUser();
      await getLastUser().then(({data}) => {
        setUserInLocalStorage(data[0])
        setUser(data[0])
      })
    }
  }
  
  useEffect(() => {
    setCurrentUser()
  }, [user])

  useEffect(()=> {
    getUsers().then(({data}) => setAllUsers(data));
  }, [allUsers.length])

  return (
      <MainTemplate>
        <Router>  
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/chat" component={Chat}/>
          </Switch>
        </Router> 
      </MainTemplate>
  );
}

export default App;
