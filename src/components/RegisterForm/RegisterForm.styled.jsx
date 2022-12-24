import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: ${props => props.theme.space[3]}px;
`;

export const Input = styled.input`
    cursor: pointer;
  max-width: 400px;
  border: 1px solid #2a363b;
  margin-top: ${props => props.theme.space[3]}px;
  padding: ${props => props.theme.space[3]}px;
  border-radius: ${props => props.theme.radii.normal};
  &:hover,
  :focus {
    border:1px solid #0848d1;
    outline:none;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color:${props => props.theme.colors.blue};
`;

export const Button = styled.button`
  cursor: pointer;
  width: 150px;
  padding: ${props => props.theme.space[3]}px;
  background-color: ${props => props.theme.colors.greenpr}; 
  border-radius: ${props => props.theme.radii.normal};
  color:${props => props.theme.colors.white};
  border: none;
  &:hover,
  :focus {
    background-color:${props => props.theme.colors.orange}; 
  }
`;
