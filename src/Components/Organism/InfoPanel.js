import React from 'react';
import styled, { withTheme } from 'styled-components';
import IconButton from '../Atoms/IconButton';
import Icon from '../Atoms/icon';
import { FlexCenter } from '../../Theme/mixins';
import { faComments, faTimesCircle, faPeopleArrows } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const StyledContainer = styled.div`
    ${FlexCenter};
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
const InfoSection = ({theme, leaveTheRoom}) => {

    return (
        <StyledContainer>
            <Icon 
                icon={faComments}
                color={theme.colors.primaryGreen}
                fontSize={theme.fontSizes.lg}
            />
            <StyledWrapper>
                <IconButton icon={faPeopleArrows}/>
                <Link to="/" onClick={()=> leaveTheRoom()}>
                    <IconButton icon={faTimesCircle} /> 
                </Link>
            </StyledWrapper>
        </StyledContainer>
    )
}

export default withTheme(InfoSection)
