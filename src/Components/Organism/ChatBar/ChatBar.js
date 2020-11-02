import React from "react";
import {
  faComments,
  faTimesCircle,
  faPeopleArrows,
} from "@fortawesome/free-solid-svg-icons";
import { socket } from "SocketClient/socketClient";
import { leaveTheRoom } from "Helpers/functions";
import { useDispatch, useSelector } from "react-redux";
import { 
  StyledIconButton, 
  StyledContainer,
  StyledWrapper, 
  StyledIcon 
} from "./ChatBar.styled";
import { useHistory } from 'react-router-dom'

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
          handleFunction={changeUser}
          isDisabled={loadingStatus}
          icon={faPeopleArrows}
        />

        <StyledIconButton
          handleFunction={() =>
            handleOnClick("/", () =>
              leaveTheRoom(currentRoom, socket, dispatch)
            )
          }
          icon={faTimesCircle}
        />
      </StyledWrapper>
    </StyledContainer>
  );
};

export default ChatBar;
