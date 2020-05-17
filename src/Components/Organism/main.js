import React from 'react';
import styled from 'styled-components';
import Header from '../Molecules/header';
import Button from '../Atoms/button';
import { FlexColumn } from '../../Theme/mixins';
import { useDispatch } from 'react-redux';
import { getRandomRoom } from '../../Redux/Actions/actions';

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
    const dispatch = useDispatch()
    

  return (
      <StyledContainer>
          <Header />
          <Button 
              route={"chat"}
              handleClick={()=> {}}
              text={"Draw"}
          />
      </StyledContainer>
  )
}


    
  
  export default Main;