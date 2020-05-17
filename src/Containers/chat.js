import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { FlexCenter } from '../Theme/mixins'
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, Link } from 'react-router-dom';
import { getRandomRoom, resetRandomRoom } from '../Redux/Actions/actions'

const StyledContainer = styled.div`
    ${FlexCenter};
    height: 100vh;
    background-color: ${({theme}) => theme.colors.primaryWhite};
`

const Chat = () => {
    const location = useLocation();
    const dispatch = useDispatch()
    const randomRoom = useSelector(state => state.rooms.randomRoom)
    const [ searchStatus, setSearchStatus ] = useState(false)

    const createRoom = () => {
        console.log("Tworze room")
    }

    const searchEmptyRoom = async () => {
        await dispatch(getRandomRoom());
        setSearchStatus(true);
    }
   
    const manageRoom = () => {
        console.log("Status", searchStatus,"random", randomRoom)
        if(searchStatus && randomRoom.length) { // if exist some randomRoom
            console.log("Dochodzę do room'u")
        } else if(searchStatus && !randomRoom.length){ // unless
            console.log("Tworzę room")
        } else {
            console.log("Grzecznie czekam")
        }
    }

    useEffect(() => {
        searchEmptyRoom();
        manageRoom();
    }, [searchStatus]);



    return (
        <StyledContainer>
            <div> {randomRoom.length ? `id roomu: ${randomRoom[0].id}`: "brak roomu"} </div>
            <Link to="/" onClick={()=> dispatch(resetRandomRoom())}>WRÓĆ</Link>
        </StyledContainer>
    )
}

export default Chat;