import {Spinner as Loader} from 'react-bootstrap';
import styled from 'styled-components';

export const StyledSpinner = styled(Loader)`
    color: ${({theme}) => theme.colors.primaryRed};
    height: 60px;
    width: 60px;
`;
