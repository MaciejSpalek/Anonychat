import React, { useEffect } from 'react'
import styled from 'styled-components';
import { FlexCenter } from '../Theme/mixins'
import { useSelector } from 'react-redux';

const StyledContainer = styled.div`
    ${FlexCenter};
    height: 100vh;
    background-color: ${({theme}) => theme.colors.primaryWhite};
`

const Chat = () => {
    const randomRoom = useSelector(state => state.rooms.randomRoom)

    const manageRooms = () => {
        if(randomRoom) {
            console.log("wylosowano room", randomRoom)
        } else {
            console.log("brak roomu", randomRoom)
        }
    }

    useEffect(()=> {
       manageRooms();
    }, [randomRoom])
    
    return (
        <StyledContainer>
            
        </StyledContainer>
    )
}

export default Chat;