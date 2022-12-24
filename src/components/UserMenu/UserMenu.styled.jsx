import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-bottom: ${props => props.theme.space[3]}px;
`;

export const Button = styled.button`
  cursor: pointer;
  width: 100px;
  border: none;
  border-radius: ${props => props.theme.radii.normal};
  padding: ${props => props.theme.space[3]}px;
  background-color:${props => props.theme.colors.green};
  color:${props => props.theme.colors.white};
  :hover,
  :focus {
    box-shadow: ${props => props.theme.shadows.normal};
  }
`;

export const Username = styled.p`
  color:${props => props.theme.colors.red};
`;
