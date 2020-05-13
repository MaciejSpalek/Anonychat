import React, { useEffect } from 'react';
import styled from 'styled-components';
import Logo from '../Molecules/logo';
import { FlexCenter } from '../../Theme/mixins';
import { useSelector, useDispatch } from 'react-redux';
import { getEmptyRooms } from '../../Redux/Actions/actions'


const StyledContainer = styled.div`
    ${FlexCenter};
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    height: 70px;
    padding: 1rem;
    background-color: ${({theme}) => theme.colors.secondaryGreen};
` 

const Navbar = () => {
    const emptyRooms = useSelector(state => state.rooms.emptyRooms)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getEmptyRooms())
      }, [emptyRooms.length])
    

    return (
        <StyledContainer>
            <Logo/>
            <div>{emptyRooms.length}</div>
        </StyledContainer>
    )
}

export default Navbar;