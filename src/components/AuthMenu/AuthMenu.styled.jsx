import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AuthLink = styled(NavLink)`
  text-decoration: none;
  color: ${p => p.theme.colors.greenpr};
   margin-right: ${props => props.theme.space[5]}px;
   font-weight:${props => props.theme.fontWeights.bold};
   &:hover,
  &:focus {
    color: ${props => props.theme.colors.red};
  }
`;