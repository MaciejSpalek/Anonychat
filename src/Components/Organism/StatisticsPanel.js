import React from 'react';
import styled from 'styled-components';
import StatsLabel from '../Molecules/statsLabel';
import InfoLabel from '../Molecules/infoLabel';

import { useSelector } from 'react-redux';
import { FlexColumn, FlexCenter } from '../../Theme/mixins';
import { faUsers, faDoorClosed, faDoorOpen } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from "@fortawesome/free-brands-svg-icons"


const Container = styled.div`
    position: fixed;
    top: calc(50% + 35px);
    left: 50%;
    ${FlexColumn};
    justify-content: space-between;
    height: calc(100vh - 90px);
    width: 95vw;
    font-size: 4rem;
    background-color: ${({theme}) => theme.colors.primaryBlue};
    border-radius: .5rem;
    transform: translate(-50%, -50%);
    transition: .3s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    opacity: ${props => props.status  ? 1 : 0};
    z-index: ${props => props.status  ? 100 : 0};
`

const StyledStatsWrapper = styled.div`
    ${FlexColumn};
`

const StatisticsPanel = () => {
    const statsPanelStatus = useSelector(state => state.statuses.statsPanelStatus)
    const emptyRooms = useSelector(state => state.rooms.emptyRooms.length)
    const allRooms = useSelector(state => state.rooms.allRooms.length)
    const users = useSelector(state => state.users.allUsers.length)

    return (
        <Container status={statsPanelStatus}>
            <StyledStatsWrapper>
                <StatsLabel 
                    text={"Online users"}
                    variable={users}
                    icon={faUsers}
                    // iconSize={30}
                />
                <StatsLabel 
                    text={"All rooms"}
                    variable={allRooms}
                    icon={faDoorClosed}
                    // iconSize={30}
                />
                <StatsLabel 
                    text={"Empty rooms"}
                    variable={emptyRooms}
                    icon={faDoorOpen}
                    // iconSize={30}
                />
            </StyledStatsWrapper>
            <InfoLabel 
                icon={faGithub}
                // iconSize={35}
            />
        </Container>
    )
}

export default StatisticsPanel;
