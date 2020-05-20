import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FlexCenter } from '../Theme/mixins';
import { joinToRoom, createRoom, getGivenRoom } from '../Helpers/requests';
import { useSelector, useDispatch } from 'react-redux';
import { getRandomRoom, getCurrentRoom, resetRandomRoom, resetCurrentRoom } from '../Redux/Actions/actions';
import { getStorageItem } from '../Helpers/localStorage';

const StyledContainer = styled.div`
    ${FlexCenter};
    flex-direction: column;
    height: 100vh;
    background-color: ${({theme}) => theme.colors.primaryWhite};
`

const Chat = () => {

    const [ searchStatus, setSearchStatus ] = useState(false)
    const [ actionType, setActionType ] = useState(null)
    
    const currentRoom = useSelector(state => state.rooms.currentRoom)
    const randomRoom = useSelector(state => state.rooms.randomRoom)
    const dispatch = useDispatch()


    const searchEmptyRoom = async () => {
        if(!searchStatus) { await dispatch(getRandomRoom()) }
        setSearchStatus(true);
    }
    
    const saveCurrentRoom = (roomID) => {
        dispatch(getCurrentRoom(roomID))
    }
    
    const handleActionType = () => {
        if(searchStatus && randomRoom.length) {
            setActionType("joining")
        } else if(searchStatus && !randomRoom.length) {
            setActionType("creating")
        } else {
            setActionType("loading")
        }
    }
      
    const findRoomInterval = () => {
        if(actionType === "creating") {
            const tempInterval = setInterval(()=> {         
                if(currentRoom.length) {
                    getGivenRoom(currentRoom[0].id).then(({data}) => {
                        if(data[0].second_user_id) {
                            console.log("kasuje")
                            saveCurrentRoom(data[0].id);
                            setActionType("texting");
                            clearInterval(tempInterval)
                        }
                    });
                }
            }, 1000)
        }
    }


    const manageRoom = async () => {
        console.log("Status: ", searchStatus,"Random: ", randomRoom, "CurrentRoom: ", currentRoom)
        if(actionType !== "texting") {
            console.log("zmieniam actionType")
            await handleActionType();
        }        

        if(actionType === "joining") {
            console.log("Dochodzę do room'u")
            await joinToRoom(randomRoom[0].id, getStorageItem('user').id)
            saveCurrentRoom(randomRoom[0].id)
        } 

        else if(actionType === "creating"){
            console.log("Tworze room")
            await createRoom(getStorageItem('user').id)
                .then(({data}) => {
                    saveCurrentRoom(data.insertId)
                })
        } 
        
        else if(actionType === "texting") {
            console.log("Rozmowy w toku...")
        }
        else {
            console.log("LOADING...")
        }
    }

    useEffect(() => {
        searchEmptyRoom();
        manageRoom();
    }, [searchStatus, actionType]);


    useEffect(()=> {
        findRoomInterval();
    }, [currentRoom.length])
  
    return (
        <StyledContainer>
            <div> {currentRoom.length ? `room's ID: ${currentRoom[0].id}`: "none room"} </div>
            <div> {`This userID: ${getStorageItem("user").id}`} </div>
            <div> {currentRoom.length ? `First userID: ${currentRoom[0].first_user_id}`: "none user"} </div>
            <div> {currentRoom.length ? `Second userID: ${currentRoom[0].second_user_id}`: "none user"} </div>
            <Link to="/" onClick={()=> {dispatch(resetRandomRoom()); dispatch(resetCurrentRoom())}}>WRÓĆ</Link>
        </StyledContainer>
    )
}

export default Chat;