import React from 'react';
import Parameter from 'Components/Molecules/Parameter';
import Footer from 'Components/Molecules/Footer';
import { useSelector } from 'react-redux';
import { 
    faDoorClosed, 
    faDoorOpen, 
    faUsers
} from '@fortawesome/free-solid-svg-icons';
import { 
    StyledParametersList,
    StyledEmptyWrapper,
    StyledContainer
} from './Parameters.styled';


const ParametersPanel = () => {
    const statsPanelStatus = useSelector(state => state.statuses.statsPanelStatus)
    const emptyRooms = useSelector(state => state.rooms.emptyRooms.length)
    const allRooms = useSelector(state => state.rooms.allRooms.length)
    const users = useSelector(state => state.users.allUsers.length)

    return (
        <StyledContainer status={statsPanelStatus}>
            <StyledEmptyWrapper></StyledEmptyWrapper>
            <StyledParametersList>
                <Parameter 
                    text={"Online"}
                    variable={users}
                    icon={faUsers}
                />
                <Parameter 
                    text={"All rooms"}
                    variable={allRooms}
                    icon={faDoorClosed}
                />
                <Parameter 
                    text={"Empty rooms"}
                    variable={emptyRooms}
                    icon={faDoorOpen}
                />
            </StyledParametersList>
            <Footer />
        </StyledContainer>
    )
}

export default ParametersPanel;
