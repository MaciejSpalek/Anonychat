import styled from 'styled-components';


export const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  font-size: ${({ theme }) => theme.fontSizes.sm};

  &::placeholder {
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
`;
