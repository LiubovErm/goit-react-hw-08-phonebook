import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: ${props => props.theme.space[3]}px;
`;

export const Input = styled.input`
  max-width: 500px;
  margin-top: ${props => props.theme.space[3]}px;
  padding: ${props => props.theme.space[3]}px;
`;

export const Link = styled.a`
  text-decoration: none;
  color:${props => props.theme.colors.blue};
`;

export const Button = styled.button`
  max-width: 100px;
  padding: ${props => props.theme.space[3]}px;
  background-color: ${props => props.theme.colors.green}; 
  border-radius: ${props => props.theme.radii.normal};
  color:${props => props.theme.colors.white};
  border: none;
  &:hover,
  :focus {
    background-color:${props => props.theme.colors.orange}; 
  }
`;

