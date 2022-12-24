import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  cursor: pointer;
  width: 500px;
  margin: 20px auto 0 auto;
  padding: ${props => props.theme.space[3]}px;;
  border-radius: ${props => props.theme.radii.normal};
  border: 1px solid #2a363b;
  &:hover,
  :focus {
    border:1px solid #0848d1;
    outline:none;
  }
`;