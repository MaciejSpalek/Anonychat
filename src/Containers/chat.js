import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import InfoSection from '../Components/Organism/InfoPanel';
import { Link } from 'react-router-dom';
import { FlexCenter } from '../Theme/mixins';
import { joinTheRoom, createRoom, getGivenRoom } from '../Helpers/requests';
import { useSelector, useDispatch } from 'react-redux';
import { getRandomRoom, getCurrentRoom, resetRandomRoom, resetCurrentRoom } from '../Redux/Actions/actions';
import { getStorageItem } from '../Helpers/localStorage';


const StyledContainer = styled.div`
    ${FlexCenter};
    flex-direction: column;
    justify-content: flex-start;
    position: fixed;
    top: 70px;
    height: calc(100vh - 70px);
    background-color: ${({theme}) => theme.colors.primaryWhite};
`

const Chat = () => {

    const [ searchStatus, setSearchStatus ] = useState(false)
    const [ actionType, setActionType ] = useState(null)
    
    const currentRoom = useSelector(state => state.rooms.currentRoom)
    const randomRoom = useSelector(state => state.rooms.randomRoom)
    const dispatch = useDispatch()
    const server = "http://localhost:5000/"
    

    const searchEmptyRoom = async () => {
        if(!searchStatus) { await dispatch(getRandomRoom(getStorageItem('user').id)) }
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
        if(actionType !== "texting") {
            await handleActionType();
        }        

        if(actionType === "joining") {
            console.log("Dochodzę do room'u")
            await joinTheRoom(randomRoom[0].id, getStorageItem('user').id)
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
            await console.log("Status: ", searchStatus,"Random: ", randomRoom, "CurrentRoom: ", currentRoom)
            console.log("Rozmowy w toku...")
        }
        else {
            console.log("LOADING...")
        }
    }
    const comeback = () => {
        dispatch(resetRandomRoom())
        dispatch(resetCurrentRoom())
    }

    useEffect(() => {
        searchEmptyRoom();
        manageRoom();
    }, [searchStatus, actionType]);


    useEffect(()=> {
        findRoomInterval();
    }, [currentRoom.length])
  

    useEffect(()=> {
        // const io = io(server);
        
        
    })
    return (
        <StyledContainer>
            <InfoSection />
            {/* <div> {currentRoom.length ? `room's ID: ${currentRoom[0].id}`: "none room"} </div>
            <div> {`This userID: ${getStorageItem("user").id}`} </div>
            <div> {currentRoom.length ? `First userID: ${currentRoom[0].first_user_id}`: "none user"} </div>
            <div> {currentRoom.length ? `Second userID: ${currentRoom[0].second_user_id}`: "none user"} </div> */}
            {/* <Link to="/" onClick={()=> comeback()}>WRÓĆ</Link> */}
        </StyledContainer>
    )
}

export default Chat;