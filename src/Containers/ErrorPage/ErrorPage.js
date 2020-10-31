import React from 'react';
import IconLink from 'Components/Atoms/iconLink';
import { withTheme } from 'styled-components';
import { faUndo } from '@fortawesome/free-solid-svg-icons';
import { 
    StyledContainer,
    StyledTextWrapper,
    StyledHeading,
    StyledText
} from './ErrorPage.styled';


const ErrorPage = ({ theme }) => {
    return (
        <StyledContainer>
            <StyledTextWrapper>
                <StyledHeading>This page</StyledHeading>
                <StyledText>doesn't exist</StyledText>
            </StyledTextWrapper>
            <IconLink 
                color={theme.colors.secondaryGray}
                fontSize={theme.fontSizes.xxl}
                handleFunction={()=> {}}
                icon={faUndo}
                to="/"
            />
        </StyledContainer>
    )
};

export default withTheme(ErrorPage);
