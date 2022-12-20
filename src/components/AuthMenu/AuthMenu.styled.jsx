import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AuthLink = styled(NavLink)`
  text-decoration: none;
  color: ${p => p.theme.colors.green};
`;