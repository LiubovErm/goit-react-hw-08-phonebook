import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavigationLink = styled(NavLink)`
  text-decoration: none;
  display: inline-block;
  font-weight:${props => props.theme.fontWeights.bold};
  margin-right: ${props => props.theme.space[5]}px;
  color: ${props => props.theme.colors.orange};
  &:hover,
  &:focus {
    color: ${props => props.theme.colors.red};
  }
`;
