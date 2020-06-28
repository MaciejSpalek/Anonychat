import React from 'react';
import styled, { withTheme } from 'styled-components';
import IconButton from '../Atoms/IconButton';
import Icon from '../Atoms/icon';

import { FlexCenter } from '../../Theme/mixins';
import { faComments, faTimesCircle, faPeopleArrows } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { socket } from '../../SocketClient/socketClient'
import { leaveTheRoom } from '../../Helpers/functions';
import { useDispatch, useSelector } from 'react-redux'

const StyledContainer = styled.div`
    ${FlexCenter};
    height: 50px;
    justify-content: space-between;
    background-color: ${({theme}) => theme.colors.primaryWhite};
    color: ${({theme}) => theme.colors.primaryWhite};
    padding: .2rem;
    padding-left: 1rem;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.3);
`

const StyledWrapper = styled.div`
    ${FlexCenter};
    width: auto;
`
const InfoSection = ({theme, changeUser}) => {
    const currentRoom = useSelector(state => state.rooms.currentRoom);
    const loadingStatus = useSelector(state => state.statuses.loadingStatus);
    const dispatch = useDispatch();

    const isButtonDisabled = () => {
        return loadingStatus
    }

    return (
        <StyledContainer>
            <Icon 
                icon={faComments}
                color={theme.colors.primaryRed}
                fontSize={theme.fontSizes.lg}
            />
            <StyledWrapper>
                <IconButton 
                    icon={faPeopleArrows} 
                    handleFunction={()=> changeUser()}
                    isDisabled={isButtonDisabled()}
                />
                <Link to="/">
                    <IconButton 
                        icon={faTimesCircle}  
                        handleFunction={()=> leaveTheRoom(currentRoom, socket, dispatch)}
                    /> 
                </Link>
            </StyledWrapper>
        </StyledContainer>
    )
}

export default withTheme(InfoSection)
