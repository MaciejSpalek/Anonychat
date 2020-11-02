import React from 'react';
import styled from 'styled-components';
import { updateAmountOfLetters } from 'Redux/Actions/actions';
import { useDispatch, useSelector } from 'react-redux';

const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  font-size: ${({ theme }) => theme.fontSizes.sm};

  &::placeholder {
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
`;

const Input = ({...props}) => {
  const dispatch = useDispatch();
  const amountOfUsersInCurrentRoom = useSelector(
    (state) => state.rooms.currentRoom.users.length
  );

  const isInputDisabled = () => amountOfUsersInCurrentRoom < 2;
  const updateValue = (e) => dispatch(updateAmountOfLetters(e.target.value.length));

  return (
    <StyledInput
      placeholder={'Send message...'}
      onChange={(e) => updateValue(e)}
      disabled={isInputDisabled()}
      aria-label='send message'
      name={'messageInput'}
      autoComplete='off'
      id='messageInput'
      maxLength={200}
      type={'text'}
      {...props}
    />
  );
};

export default Input;
