import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { getTokenFromLocalStorage, setTokenInLocalStorage, isLocalStorageEmpty } from '../Helpers/storageFunctions'
import Navbar from '../Components/Organism/navbar'
import Home from './home';
import Chat from './chat';
import MainTemplate from '../Templates/mainTemplate'
const TokenGenerator = require('uuid-token-generator');

const App = () => {
  const [ allUsers, setAllUsers ] = useState([])
  const [ token, setToken ] = useState(getTokenFromLocalStorage())

  const generateToken = () => {
    const token = new TokenGenerator()
    return token.generate()
  }

  const getUsers = () => {
    fetch('http://localhost:5000/users')
      .then(response => response.json())
      .then(({data}) => setAllUsers(data))
      .catch(error => {
        console.error(error)
      })
  }

  const addUser = (token) => {
      fetch(`http://localhost:5000/users/add?token=${token}&onChat=${0}`)
        .catch(error => {
          console.error(error)
        })
  }


  const test = async () => {
    if(!token) {
      setTokenInLocalStorage(generateToken())
      addUser(getTokenFromLocalStorage())
    }
  }

  useEffect(() => {
    test()
  }, [token])

  useEffect(()=> {
    getUsers()
  }, [allUsers.length])

  return (
      <MainTemplate>
        <Router>  
          <Navbar />
          <Switch>
            <Route exact path="/" component={()=> <Home allUsers={allUsers}/>} />
            <Route exact path="/chat" component={Chat}/>
          </Switch>
        </Router> 
      </MainTemplate>
  );
}

export default App;
