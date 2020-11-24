import React from 'react';
import Logo from 'Components/Molecules/Logo/Logo';
import IconButton from 'Components/Atoms/IconButton';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { changeStatsPanelStatus } from 'Redux/Actions/actions';
import { StyledContainer } from './Navbar.styled';

const Navbar = () => {
    const statsPanelStatus = useSelector(state => state.statuses.statsPanelStatus);
    const dispatch = useDispatch();
    const changeState = () => dispatch(changeStatsPanelStatus(!statsPanelStatus));

    return (
        <StyledContainer>
            <Logo />
            <IconButton 
                icon={faInfoCircle} 
                handleFunction={changeState}
            />
        </StyledContainer>
    );
};

export default Navbar;