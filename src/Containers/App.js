import React, { useEffect, useState } from 'react';
import MainTemplate from '../Templates/mainTemplate'
import Navbar from '../Components/Organism/navbar'
import Home from './home';
import Chat from './chat';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { getStorageItem, setStorageItem } from '../Helpers/localStorage'
import { getGivenUser, addUser } from '../Helpers/requests';

import { connect } from 'react-redux';
import { getEmptyRooms } from '../Redux/Actions/actions'


const App = ({rooms}) => {
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

  useEffect(() => {
      getEmptyRooms();
      console.log(rooms)
  }, [])

 
  return (
      <MainTemplate>
        <Router>  
          <Navbar data={rooms.length}/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path={"/chatroom"} component={Chat} />
          </Switch>
        </Router> 
      </MainTemplate>
  );
}

const mapStateToProps = state => ({
  rooms: state.rooms.emptyRooms
});


export default connect(mapStateToProps)(App);
