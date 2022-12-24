import styled from 'styled-components';
import { ImPlus } from "react-icons/im";

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: ${props => props.theme.space[3]}px;
`;

export const Input = styled.input`
  cursor: pointer;
  max-width: 500px;
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

export const Button = styled.button`
  cursor: pointer;  
  display:flex;
  justify-content:center;
  width: 180px;
  border: none;
  border-radius: ${props => props.theme.radii.normal};
  padding: ${props => props.theme.space[3]}px;
  margin-top: ${props => props.theme.space[5]}px;
  margin-bottom: ${props => props.theme.space[5]}px;
  background-color:${props => props.theme.colors.green};
  color:${props => props.theme.colors.white};
  :hover,
  :focus {
    box-shadow: ${props => props.theme.shadows.normal};
  }
`;

export const Icon = styled(ImPlus)`
  margin-left: 10px;
`;