import React from 'react';
import { StyledContainer, StyledLink, StyledIcon, StyledText } from './Footer.styled'
import { faGithub } from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
    return (
        <StyledContainer>
            <StyledText> © Maciej Spałek 2020 </StyledText>
            <StyledLink href={"https://github.com/MaciejSpalek/ChatWithStrangers"}>
                <StyledIcon icon={faGithub} />
            </StyledLink>
        </StyledContainer>
    )
}

export default Footer;