import styled from 'styled-components';
import { FlexCenter } from 'Theme/mixins';
import Icon from 'Components/Atoms/Icon';
import IconButton from 'Components/Atoms/IconButton';

export const StyledContainer = styled.div`
    ${FlexCenter};
    height: 50px;
    justify-content: space-between;
    background-color: ${({theme}) => theme.colors.primaryWhite};
    color: ${({theme}) => theme.colors.primaryWhite};
    padding: 10px;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.3);
`;

export const StyledWrapper = styled.div`
    ${FlexCenter};
    width: auto;
`;

export const StyledIconButton = styled(IconButton)`
    font-size: 32px;
    :first-of-type {
        margin-right: 10px;
    }
`;

export const StyledIcon = styled(Icon)`
    color: ${({theme}) => theme.colors.primaryRed};
    font-size: 35px;
`;
