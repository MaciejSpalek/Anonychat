import React from 'react';
import { setConverserLeftStatus } from 'Redux/Actions/actions';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { 
    StyledWrapper, 
    StyledButton, 
    StyledText,
    Container
} from './EndWrapper.styled';


const EndWrapper = ({ changeUser }) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const handleOnClick = (routes, callback) => {
        callback();
        history.push(routes);
    }

    return (
        <Container>
            <StyledWrapper>
                <StyledText> User has just left </StyledText>
                <StyledButton 
                    onClick={() => handleOnClick('/chat', changeUser)}
                    text='Draw next'
                />
                <StyledButton 
                    onClick={() => handleOnClick('/', ()=> dispatch(setConverserLeftStatus(false)))}
                    text='Exit'
                />
            </StyledWrapper>
        </Container>
    )
}

export default EndWrapper;
