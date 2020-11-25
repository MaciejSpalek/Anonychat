import React from 'react';
import PropTypes from 'prop-types';
import { socket } from 'socketClient/socketClient';
import { leaveTheRoom } from 'helpers/functions';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  faComments,
  faTimesCircle,
  faPeopleArrows,
} from '@fortawesome/free-solid-svg-icons';
import {
  StyledIconButton,
  StyledContainer,
  StyledWrapper,
  StyledIcon,
} from './ChatBar.styled';

const ChatBar = ({ changeUser }) => {
  const loadingStatus = useSelector((state) => state.statuses.loadingStatus);
  const currentRoom = useSelector((state) => state.rooms.currentRoom);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleOnClick = (routes, callback) => {
    callback();
    history.push(routes);
  };

  return (
    <StyledContainer>
      <StyledIcon icon={faComments} />
      <StyledWrapper>
        <StyledIconButton
          onClick={changeUser}
          isDisabled={loadingStatus}
          icon={faPeopleArrows}
        />
        <StyledIconButton
          icon={faTimesCircle}
          onClick={() =>
            handleOnClick('/', () =>
              leaveTheRoom(currentRoom, socket, dispatch)
            )
          }
        />
      </StyledWrapper>
    </StyledContainer>
  );
};

export default ChatBar;

ChatBar.propTypes = {
  changeUser: PropTypes.func.isRequired
}