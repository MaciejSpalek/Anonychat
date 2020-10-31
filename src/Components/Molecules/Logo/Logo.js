import React from 'react';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { 
    StyledTextWrapper,
    StyledParagraph, 
    StyledContainer, 
    StyledIcon 
} from './Logo.styled';

const Logo = () => {
    return (
        <StyledContainer>
                <StyledIcon icon={faUserSecret} />
                <StyledTextWrapper>
                    <StyledParagraph text={"Anony"} />
                    <StyledParagraph text={"CHAT"} />
                </StyledTextWrapper>
        </StyledContainer>
    )
}

export default Logo;