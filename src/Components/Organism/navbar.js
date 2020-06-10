import React from 'react';
import styled from 'styled-components';
import Logo from '../Molecules/logo';
import IconButton from '../Atoms/IconButton';
import { FlexCenter } from '../../Theme/mixins';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { changeStatsPanelStatus } from '../../Redux/Actions/actions';

const StyledContainer = styled.div`
    ${FlexCenter};
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    height: 70px;
    padding: 1rem;
    background-color: ${({theme}) => theme.colors.primaryBlue};
` 

const Navbar = () => {

    const statsPanelStatus = useSelector(state => state.statuses.statsPanelStatus);
    const dispatch = useDispatch();
    const changeState = () => {
        dispatch(changeStatsPanelStatus(!statsPanelStatus));
    }

    return (
        <StyledContainer>
            <Logo />
            <IconButton icon={faInfoCircle} handleFunction={()=> {changeState()}}/>
        </StyledContainer>
    )
}

export default Navbar;