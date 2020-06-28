import React from 'react';
import styled from 'styled-components';
import Button from '../Atoms/button';
import { FlexCenter, quickShow } from '../../Theme/mixins';
import { useDispatch } from 'react-redux';
import { setConverserLeftStatus } from '../../Redux/Actions/actions';

const Container = styled.div`
    ${FlexCenter};
    flex-direction: column;
    height: calc(100vh - 70px - 50px);
`

const StyledWrapper = styled.div`
    border-radius: .5rem;
    animation: ${quickShow} 1s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
    background-color: ${({theme}) => theme.colors.primaryRed};
    padding: 2rem;
`

const StyledText = styled.h2`
    font-size: ${({theme}) => theme.fontSizes.md};
    color: ${({theme}) => theme.colors.primaryWhite};
`

const EndWrapper = ({changeUser}) => {
    const dispatch = useDispatch();
    
    return (
        <Container>
            <StyledWrapper>
                <StyledText>User has just left</StyledText>
                <Button 
                    route={"chat"}
                    handleClick={()=> {changeUser()}}
                    text={"Draw next"}
                />
                <Button 
                    route={""}
                    handleClick={()=> {dispatch(setConverserLeftStatus(false))}}
                    text={"Exit"}
                    margin={"1rem 0 0 0"}
                />
            </StyledWrapper>
        </Container>
    )
}

export default EndWrapper;
