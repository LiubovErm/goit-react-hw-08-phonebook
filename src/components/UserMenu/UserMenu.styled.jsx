import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-bottom: ${props => props.theme.space[3]}px;
`;

export const Button = styled.button`
  min-width: 100px;
  background-color: blue;
  &:hover,
  :focus {
    background-color: green;
  }
`;

export const Username = styled.p`
  color:${props => props.theme.colors.red};
`;
