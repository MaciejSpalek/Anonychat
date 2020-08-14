import React from 'react';
import styled from 'styled-components';
import StatsItem from '../Molecules/statsLabel';
import InfoLabel from '../Molecules/infoLabel';

import { useSelector } from 'react-redux';
import { FlexColumn, FlexCenter } from '../../Theme/mixins';
import { faUsers, faDoorClosed, faDoorOpen } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from "@fortawesome/free-brands-svg-icons"


const Container = styled.div`
    position: fixed;
    top: 70px;
    left: 0;
    ${FlexColumn};
    justify-content: space-between;
    height: calc(100vh - 70px);
    width: 100%;
    font-size: 4rem;
    border-top: .25rem solid ${({theme}) => theme.colors.primaryWhite}; 
    background-color: ${({theme}) => theme.colors.primaryBlue};
    transition: .3s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    display: ${props => props.status  ? "flex" : "none"};
    z-index: ${props => props.status  ? 100 : 0};
`

const StyledStatsList = styled.ul`
    ${FlexColumn};
    @media only screen and (min-width: ${({theme}) => theme.responsive.sm}) {
        ${FlexCenter}; 
    }
`

const EmptyWrapper = styled.div`
    display: none;
    @media only screen and (min-width: ${({theme}) => theme.responsive.sm}) {
        display: unset;
    }
`
const StatisticsPanel = () => {
    const statsPanelStatus = useSelector(state => state.statuses.statsPanelStatus)
    const emptyRooms = useSelector(state => state.rooms.emptyRooms.length)
    const allRooms = useSelector(state => state.rooms.allRooms.length)
    const users = useSelector(state => state.users.allUsers.length)

    return (
        <Container status={statsPanelStatus}>
            <EmptyWrapper></EmptyWrapper>
            <StyledStatsList>
                <StatsItem 
                    text={"Online"}
                    variable={users}
                    icon={faUsers}
                />
                <StatsItem 
                    text={"All rooms"}
                    variable={allRooms}
                    icon={faDoorClosed}
                />
                <StatsItem 
                    text={"Empty rooms"}
                    variable={emptyRooms}
                    icon={faDoorOpen}
                />
            </StyledStatsList>
            <InfoLabel icon={faGithub} />
        </Container>
    )
}

export default StatisticsPanel;
