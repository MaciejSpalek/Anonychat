import React, { useEffect, useState } from 'react';
import MainTemplate from '../Templates/mainTemplate'
import Navbar from '../Components/Organism/navbar'
import Home from './home';
import Chat from './chat';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { getStorageItem, setStorageItem } from '../Helpers/localStorage'
import { getUsers, getGivenUser, getEmptyRooms, addUser } from '../Helpers/requests';


const App = () => {
  const [ user, setUser ] = useState(getStorageItem("user"));
  const [ emptyRooms, setEmptyRooms ] = useState([]);
  const [ allUsers, setAllUsers ] = useState([])

  const searchEmptyRooms = () => {
      getEmptyRooms().then(({data}) => setEmptyRooms(data));
  }

  const searchAllUsers = () => {
    getUsers().then(({data}) => setAllUsers(data));
  }

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

  useEffect(() => {
      searchEmptyRooms();
  }, [emptyRooms.length])

  useEffect(()=> {
    searchAllUsers();
  }, [allUsers.length])

  return (
      <MainTemplate>
        <Router>  
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path={"/chatroom"} component={Chat} />
          </Switch>
        </Router> 
      </MainTemplate>
  );
}

export default App;
