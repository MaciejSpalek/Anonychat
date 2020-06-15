import styled from 'styled-components';

const Heading = styled.h1`
    color: ${({theme}) => theme.colors.primaryBlue};
    font-size: ${({theme}) => theme.fontSizes.lg};
    font-weight: ${({theme}) => theme.fontWeights.bold};
`

export default Heading;