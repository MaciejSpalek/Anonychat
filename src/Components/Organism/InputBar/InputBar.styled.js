import styled from 'styled-components';
import { FlexCenter } from 'Theme/mixins';
import IconButton from 'Components/Atoms/IconButton';
import Input from 'Components/Atoms/Input';

export const StyledContainer = styled.div`
    ${FlexCenter};
    flex-direction: column;
`;

export const StyledWrapper = styled.div`
    ${FlexCenter};
    justify-content: flex-start;
    border-bottom: .15rem solid ${({theme}) => theme.colors.primaryGray};
    padding: .5rem;
`;
export const StyledForm = styled.form`
    ${FlexCenter};
    height: 50px;
    padding: 10px;
`;

export const StyledIconButton = styled(IconButton)`
    color: ${({theme}) => theme.colors.primaryRed};
    font-size: 30px;
`;

export const StyledInput = styled(Input)`
    background-color: white;
    margin-right: 10px;
`;