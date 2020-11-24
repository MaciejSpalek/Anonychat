import React from 'react';
import { updateAmountOfLetters } from 'Redux/Actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { StyledInput } from './Input.styled';

const Input = ({ ...props }) => {
  const dispatch = useDispatch();
  const amountOfUsersInCurrentRoom = useSelector(
    (state) => state.rooms.currentRoom.users.length
  );

  const isInputDisabled = () => amountOfUsersInCurrentRoom < 2;
  const updateValue = (e) =>
    dispatch(updateAmountOfLetters(e.target.value.length));

  return (
    <StyledInput
      onChange={(e) => updateValue(e)}
      placeholder='Send message...'
      disabled={isInputDisabled()}
      aria-label='send message'
      name='messageInput'
      autoComplete='off'
      id='messageInput'
      maxLength={200}
      type='text'
      {...props}
    />
  );
};

export default Input;
