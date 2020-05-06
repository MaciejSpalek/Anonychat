import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from '../Molecules/header';
import Button from '../Atoms/button';
import { FlexColumn } from '../../Theme/mixins';
import { getEmptyRooms } from '../../Helpers/requests';

const StyledContainer = styled.main`
    ${FlexColumn};
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 70px;
    left: 0;
    height: calc(100vh - 70px - 30px);
    padding: 1rem;
    background-color: ${({theme}) => theme.colors.primaryWhite};
` 
const Main = () => {
    const [ emptyRooms, setEmptyRooms ] = useState([]);
    const searchRoom = () => {
        console.log(emptyRooms)
    }


    useEffect(() => {
        getEmptyRooms().then(({data}) => setEmptyRooms(data));
      }, [emptyRooms.length])

    

    return (
        <StyledContainer>
            <Header />
            <Button 
                route={"chat"}
                text={"Draw"}  
                handleClick={()=> searchRoom()}
            />
        </StyledContainer>
    )
}

export default Main;