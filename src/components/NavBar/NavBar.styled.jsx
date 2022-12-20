import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavigationLink = styled(NavLink)`
  text-decoration: none;
  display: inline-block;
  font-weight: 500;
  color: ${props => props.theme.colors.blue};
  &:hover,
  &:focus {
    color: ${props => props.theme.colors.red};
  }
`;
