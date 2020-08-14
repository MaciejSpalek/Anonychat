import React from 'react';
import styled, { withTheme } from 'styled-components';
import { FlexCenter } from '../../Theme/mixins';
import Paragraph from '../Atoms/paragraph';
import Heading from '../Atoms/heading';
import Button from '../Atoms/button';
import { useSelector } from 'react-redux';
import { isTheServerConnected } from '../../Helpers/functions';
import LoadingPanel from '../Organism/LoadingPanel';

const StyledContainer = styled.header`
    ${FlexCenter};
    flex-direction: column;
    background-color: ${({theme}) => theme.colors.primaryWhite};
    padding: 1rem;
    margin-bottom: 2rem;
` 
const Header = ({theme}) => {
    const amountOfUsers = useSelector(state => state.users.allUsers.length);
    return (
        <StyledContainer>
          {isTheServerConnected(amountOfUsers) ? <>
            <Heading>
                Find somebody
            </Heading>
            <Paragraph 
                fontSize={theme.fontSizes.md} 
                fontWeight={theme.fontWeights.bold} 
                color={theme.colors.primaryBlue}
                text={"to talk"} 
            />
            <Button 
                route={"chat"}
                handleClick={()=> {}}
                text={"Draw"}
            />
          </> :  
            <LoadingPanel 
                description="Connecting..."
            /> 
          }
        </StyledContainer>
    )
}

export default withTheme(Header);